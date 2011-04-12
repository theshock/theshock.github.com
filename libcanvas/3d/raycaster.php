function render() {

	// find which map block the camera is in

	$cameraBlockX = $this->camX >> 6;
	$cameraBlockY = $this->camY >> 6;

	$offset = 0;

	// clamp angle for lookup tables

	if ($this->camAngle < 0)        $this->camAngle += pi() * 2;
	if ($this->camAngle > pi() * 2) $this->camAngle -= pi() * 2;

	$angle = $this->camAngle + $this->camFov * 0.5;
	if ($angle > pi() * 2) $angle -= pi() * 2;

	$width = $this->width;

	$this->camPCentre = $this->height / 2 - $this->camRoll;

	$ang = ($this->camAngle * $this->divisor) | 0;

	$invertZ = 64 - $this->camZ;

	// loop through each vertical strip

	while ($width-- > 0) {

		// set nearest face to practical infinity

		$nearestFace = 4294967296;

		$angleLookup = ($angle * $this->divisor);

		// find oriented face aligned to X axis of map

		$x = $cameraBlockX;
		$y = $cameraBlockY;

		if ($this->sin[$angleLookup] < 0) {

			while ($y > -1 && $x > -1 && $x < $this->mapWidth) {
				$absY = $y << 6;
				$absX = $this->camX + ($absY - $this->camY) / $this->tan[$angleLookup];
				$x    = $absX >> 6;

				// check if there is a block here

				if ($this->map[$x][--$y]) {
					$nearestFace = pow($absX - $this->camX, 2) + pow($absY - $this->camY, 2);
					$offset = $absX & 63;
					break;
				}
			}

		} else {

			while ($y++ < $this->mapHeight && $x > -1 && $x < $this->mapWidth) {
				$absY = $y << 6;
				$absX = $this->camX + ($absY - $this->camY) / $this->tan[$angleLookup];
				$x    = $absX >> 6;

				// check if there is a block here

				if ($this->map[$x][$y]) {
					$nearestFace = pow($absX - $this->camX, 2) + pow($absY - $this->camY, 2);
					$offset = 64 - $absX & 63;
					break;
				}
			}

		}

		// find closest face oriented to Y axis of map

		$x = $cameraBlockX;
		$y = $cameraBlockY;

		if ($this->cos[$angleLookup] < 0) {

			while ($x > -1 && $y > -1 && $y < $this->mapHeight) {
				$absX = $x << 6;
				$absY = $this->camY + ($absX - $this->camX) * $this->tan[$angleLookup];
				$y    = $absY >> 6;

				// check if there is a block here

				if ($this->map[--$x][$y]) {
					$distance = pow($absX - $this->camX, 2) + pow($absY - $this->camY, 2);

					if ($distance < $nearestFace) {
						$nearestFace = $distance;
						$offset = 64 - $absY & 63;
					}
					break;
				}
			}

		} else {

			while ($x++ < $this->mapWidth && $y > -1 && $y < $this->mapHeight) {
				$absX = $x << 6;
				$absY = $this->camY + ($absX - $this->camX) * $this->tan[$angleLookup];
				$y    = $absY >> 6;

				// check if there is a block here

				if ($this->map[$x][$y]) {
					$distance = pow($absX - $this->camX, 2) + pow($absY - $this->camY, 2);

					if ($distance < $nearestFace) {
						$nearestFace = $distance;
						$offset = $absY & 63;
					}
					break;
				}
			}

		}

		// check whether the current strip is looking left or right of centre angle

		if ($angleLookup < $ang)    {
			$distort = $this->camDistance / $this->cos[7200 + $angleLookup - $ang];
		} else {
			$distort = $this->camDistance / $this->cos[$angleLookup - $ang];
		}

		$wallHeight = $distort / sqrt($nearestFace);

		$distanceFloor   = $invertZ * $distort;
		$distanceCeiling = $this->camZ * $distort;

		$floorLevel = (int) ($this->camPCentre + $wallHeight * $this->camZ + 0.5);
		$wallLevel  = (int) ($this->camPCentre - $wallHeight * $invertZ);

		$height = $this->height;

		// draw floor

		while (--$height > $floorLevel && $height >= 0) {
			$distance = $distanceFloor / ($height - $this->camPCentre);
			imagesetpixel($this->canvas, $width, $height, imagecolorat($this->texFloor, ($this->camX + $this->cos[$angleLookup] * $distance) & 63, ($this->camY + $this->sin[$angleLookup] * $distance) & 63));
		}

		// draw wall

		while (--$height > $wallLevel && $height >= 0) {
			imagesetpixel($this->canvas, $width, $height, imagecolorat($this->texWall, $offset, ($height - $wallLevel) / $wallHeight));
		}

		// draw ceiling

		while (--$height > -1) {
			$distance = $distanceCeiling / ($this->camPCentre - $height);
			imagesetpixel($this->canvas, $width, $height, imagecolorat($this->texCeil, ($this->camX + $this->cos[$angleLookup] * $distance) & 63, ($this->camY + $this->sin[$angleLookup] * $distance) & 63));
		}

		$angle -= $this->camPerRayAngle;

		if ($angle < 0) $angle += pi() * 2;
	}

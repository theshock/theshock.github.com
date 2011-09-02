var Start = Start || {};

Start.tombRaiderMaze = function (str) {
	var maze = (new Maze)
		.fromString(str)
		.mapOutput();
	var unit = (new TombRaider (maze))
		.toStart();

	while (unit.next()) {
		if (unit.finish()) {
			unit.highlight();
			break;
		}
	}
};
function ImagePreloader (images, onloadFunc) {
	this.ready = false;

	var errors = 0;
	var aborts = 0;
	var loaded = 0;

	var processedImages = 0;
	var numberImages    = 0;

	var imagesArray = {};

	for ( var i in images ) {
		numberImages++;
		var oImage = new Image;
		oImage.onload  = function() {
			loaded++;
			onProcessed();
		};
		oImage.onerror = function() {
			errors++;
			onProcessed();
		};
		oImage.onabort = function() {
			aborts++;
			onProcessed();
		};
		oImage.src = images[i];
		imagesArray[i] = oImage;
	}

	var onProcessed = function() {
    	if ( ++processedImages == numberImages ) {
			this.ready = true;
			onloadFunc(imagesArray);
			if (console) {
				console.info(
					"Image preloading has completed;\n" +
					"Images preloaded: " + loaded + "; " +
					"Errors: " + errors + "; Aborts: " + aborts
				);
			}
		}
	};
}
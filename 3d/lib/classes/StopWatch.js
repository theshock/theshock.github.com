StopWatch = function (fn) {
	this.time  = 0;
	this.timer = null;
	this.fn    = fn;
}
StopWatch.prototype = {
	getTime : function () {
		return this.time;
	},
	getString : function () {
		var ms100 = Math.floor(this.time / 100)  % 10;
		var sec   = Math.floor(this.time / 1000) % 60;
		var min   = Math.floor(this.time / 1000 / 60);
		return min ? min + ':' + sec : sec + '.' + ms100 + ' s.';
	},
	start : function () {
		if (!this.timer) {
			var sw = this;
			this.timer = setInterval (function () {
				sw.time += 100;
				if (this.fn) {
					this.fn(sw);
				}
			}, 100);
		}
		return this;
	},
	pause : function(time){
		clearInterval(this.timer);
		this.timer = null;
		if (time) {
			var sw = this;
			setTimeout(function() {
				sw.start()
			}, time*1000);
		}
		return this;
	},
	stop : function () {
		this.pause().time = 0;
		this.fn(this);
		return this;
	}
};
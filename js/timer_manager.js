function TimerManager() {
  this.seconds = 0;
}

TimerManager.prototype.start = function (callbackObj, callback) {
	this.seconds = 0;
	this.callbackObj = callbackObj;
	this.callback = callback;
	this.timer = setInterval(function(timer){timer.interval();timer.callback(callbackObj);}, 1000, this);
}

TimerManager.prototype.stop = function () {
	clearInterval(this.timer);
}

TimerManager.prototype.interval = function () {
	this.seconds++;
}

TimerManager.prototype.output = function () {
	this.h = Math.floor(this.seconds / 3600); //时
	this.m = Math.floor(this.seconds / 60) % 60; //分
	this.s = Math.floor(this.seconds % 60); //秒

	this.h < 0 ? this.h = 0 : this.h = this.h;
	this.m < 0 ? this.m = 0 : this.m = this.m;
	this.s < 0 ? this.s = 0 : this.s = this.s;

	this.h.toString().length < 2 ? this.hstr = "0" + this.h.toString() : this.hstr = this.h; //1显示01
	this.m.toString().length < 2 ? this.mstr = "0" + this.m.toString() : this.mstr = this.m; //1显示01
	this.s.toString().length < 2 ? this.sstr = "0" + this.s.toString() : this.sstr = this.s; //1显示01

	this.timestr = this.hstr + ":" + this.mstr + ":" + this.sstr;
	
	return this.timestr;
}

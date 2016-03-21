/// <reference path="time-interfaces.ts" />

module Alarm {
	export var getTime = function(){
		var currentTime = new Date();
		return currentTime.getHours() + ":" + currentTime.getMinutes() + ":" + currentTime.getSeconds();
	}

	export var checkAlarm = function(hour, minute) {
		if (hour === parseInt(moment().format("h")) && minute === parseInt(moment().format("mm"))) {
			return true;
		}
	}
}

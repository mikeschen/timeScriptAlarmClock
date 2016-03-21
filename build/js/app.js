var Alarm = (function () {
    function Alarm(hour, minute) {
        this.hour = hour;
        this.minute = minute;
    }
    return Alarm;
}());
/// <reference path="time-interfaces.ts" />
var Alarm;
(function (Alarm) {
    Alarm.getTime = function () {
        var currentTime = new Date();
        return currentTime.getHours() + ":" + currentTime.getMinutes() + ":" + currentTime.getSeconds();
    };
    Alarm.checkAlarm = function (hour, minute) {
        if (hour === parseInt(moment().format("h")) && minute === parseInt(moment().format("mm"))) {
            return true;
        }
    };
})(Alarm || (Alarm = {}));

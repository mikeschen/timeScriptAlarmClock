interface IAlarm {
	hour: string;
	minute: string;
}

class Alarm implements IAlarm {
 constructor(public hour: string, public minute: string) {}
}

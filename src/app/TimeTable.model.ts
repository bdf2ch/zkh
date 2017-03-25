export interface TimeTableDayConfig {
  start: number;
  end: number;
  day_off: boolean;
};


export class TimeTableDay {
  start: number;
  end: number;
  dayOff: boolean;

  constructor (config?: TimeTableDayConfig) {
    if (config) {
      this.start = config.start;
      this.end = config.end;
      this.dayOff = config.day_off;
    }
  };
};


export interface  TimeTableConfig {
  monday: TimeTableDay;
  tuesday: TimeTableDay;
  wednesday: TimeTableDay;
  thursday: TimeTableDay;
  friday: TimeTableDay;
  saturday: TimeTableDay;
  sunday: TimeTableDay;
};

export class TimeTable {
  monday: TimeTableDay;
  tuesday: TimeTableDay;
  wednesday: TimeTableDay;
  thursday: TimeTableDay;
  friday: TimeTableDay;
  saturday: TimeTableDay;
  sunday: TimeTableDay;

  constructor (config?: TimeTableConfig) {
    if (config) {
      this.monday = config.monday;
      this.tuesday = config.tuesday;
      this.wednesday = config.wednesday;
      this.thursday = config.thursday;
      this.friday = config.friday;
      this.saturday = config.saturday;
      this.sunday = config.sunday;
    }
  };
};

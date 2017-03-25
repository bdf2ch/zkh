import { TimeTable } from "./TimeTable.model";


export interface  CompanyConfig {
  id: number;
  title: string;
  address: string;
  phones: string;
  logo: string;
};


export class Company {
  readonly  id: number;
  title: string;
  address: string;
  phones: string[] = [];
  timetable: TimeTable;
  logo: string = '';

  constructor (config?: CompanyConfig) {
    if (config) {
      this.id = config.id;
      this.title =config.title;
      this.address = config.address;
      this.phones = config.phones.split(';');
    }
  };
};

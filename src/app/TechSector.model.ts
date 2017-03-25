import { TimeTable } from "./TimeTable.model";


export interface  TechSectorConfig {
  id: number;
  manager_id: number;
  address: string;
  coordinates: string;
};


export class TechSector {
  readonly  id: number = 0;
  managerId: number = 0;
  address: string = '';
  coordinates: [number, number] = [0, 0];
  timeTable: TimeTable;

  constructor (config?: TechSectorConfig) {
    if (config) {
      this.id = config.id;
    }
  };
};

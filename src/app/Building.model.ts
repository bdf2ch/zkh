export interface BuildingConfig {
  id: number;
  company_id?: number;
  tech_sector_id?: number;
  street: string;
  building: string;
  building_index?: string;
  coordinates?: string;
};

export class Building {
  readonly id: number = 0;
  companyId: number = 0;
  techSectorId: number = 0;
  street: string = '';
  building: string = '';
  buildingIndex: string = '';
  address: string = '';
  coordinates: [number, number] = [0, 0];

  constructor (config?: BuildingConfig) {
    if (config) {
      this.id = config.id;
      if (config.company_id)
        this.companyId = config.company_id;
      if (config.tech_sector_id)
        this.techSectorId = config.tech_sector_id;
      this.street = config.street;
      this.building = config.building;
      if (config.building_index)
        this.buildingIndex = config.building_index;
      if (config.coordinates) {
        let geo = config.coordinates.split(';');
        this.coordinates = [parseFloat(geo[0]), parseFloat(geo[1])];
      }
    }
  };
};

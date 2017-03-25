export interface PersonConfig {
  id: number;
  name: string;
  fname: string;
  surname: string;
  position?: string;
  email?: string;
  mobile?: string;
  photo?: string;
};


export class Person {
  readonly  id: number;
  name: string = '';
  fname: string = '';
  surname: string = '';
  position: string = '';
  email: string = '';
  mobile: string = '';
  photo: string = '';
  fio: string = '';

  constructor (config?: PersonConfig) {
    if (config) {
      this.id = config.id;
      this.name = config.name;
      this.surname = config.surname;
      if (config.fname)
        this.fname = config.fname;
      if (config.position)
        this.position = config.position;
      if (config.email)
        this.email = config.email;
      if (config.mobile)
        this.mobile = config.mobile;
      if (config.photo)
        this.photo = config.photo;
    }
  };
};

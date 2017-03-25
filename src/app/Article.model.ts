export interface  ArticleConfig {
  id: number;
  company_id: number;
  building_id: number;
  author_id: number;
  title: string;
  content: string;
  is_enabled: boolean;
};


export class Article {
  readonly id: number = 0;
  companyId: number = 0;
  buildingId: number = 0;
  authorId: number = 0;
  title: string = '';
  content: string = '';
  isEnabled: boolean = true;

  constructor (config?: ArticleConfig) {
    if (config) {
      this.id = config.id;
      this.companyId = config.company_id;
      this.buildingId = config.building_id;
      this.authorId = config.author_id;
      this.title = config.title;
      this.content = config.content;
      this.isEnabled = config.is_enabled;
    }
  };
};

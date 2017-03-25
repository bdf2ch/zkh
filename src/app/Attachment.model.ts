export interface  AttachmentConfig {
  id: number;
  folder_id: number;
  company_id: number;
  title: string;
  size: number;
  type: string;
};


export class Attachment {
  readonly  id: number = 0;
  folderId: number = 0;
  companyId: number = 0;
  title: string = '';
  size: number = 0;
  type: string = '';

  constructor (config?: AttachmentConfig) {
    if (config) {
      this.id = config.id;
      this.folderId = config.folder_id;
      this.companyId = config.company_id;
      this.title = config.title;
      this.size = config.size;
      this.type = config.type;
    }
  };
};

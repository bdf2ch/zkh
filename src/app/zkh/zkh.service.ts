import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Company } from "../Company.model";
import { Observable } from "rxjs";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

@Injectable()
export class ZkhService {
  companies: Company[] = [];

  constructor() { }

}

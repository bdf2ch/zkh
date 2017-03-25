import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { Observable } from "rxjs";
import { Company } from "../Company.model";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

@Injectable()
export class AdminService {
  private apiUrl = '/assets/serverside/api.php';
  private loading: boolean = false;


  constructor(private $http: Http) {};


  /**
   * Отправляет на сервер данные о добавляемой компании
   * @param company {Company} - добавляемая компания
   * @returns {Observable<T>}
   */
  addCompany(company: Company): Observable<Company> {
    let headers = new Headers({ 'Content-Type': 'apploication/json' });
    let options = new RequestOptions({ headers: headers });
    let parameters = { action: 'addCompany', data: {} };
    this.loading = true;
    return this.$http.post(this.apiUrl, parameters, options)
      .map((response: Response) => {
        let body = response.json();
        let company = new Company(body);
        this.loading = false;
        return company;
      })
      .take(1);
  };

}

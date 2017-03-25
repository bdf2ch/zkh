import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Company } from "../Company.model";
import { Observable } from "rxjs";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';


@Injectable()
export class CompaniesService {
  private apiUrl = '/assets/serverside/api.php';
  private loading: boolean = false;
  private companies: Company[] = [];


  constructor(private $http: Http) {};


  /**
   * Получает с сервера массив всех компаний
   * @returns {Observable<T>}
   */
  fetchAllCompanies(): Observable<Company[]> {
    let headers = new Headers({ 'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers });
    let parameters = { action: 'getAllCompanies' };
    this.loading = true;
    return this.$http.post(this.apiUrl, parameters, options)
      .map((response: Response) => {
        this.loading = false;
        let body = response.json();
        let length = body.length;
        for (let i = 0; i < length; i++) {
          let company = new Company(body[i]);
          this.companies.push(company);
        }
        return this.companies;
      })
      .take(1);
  };


  fetchCompanyById(id: number): Observable<Company> {
    let headers = new Headers({ 'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers });
    let parameters = { action: 'getCompanyById', data: { id: id }};
    this.loading = true;
    return this.$http.post(this.apiUrl, parameters, options)
      .map((response: Response) => {
        this.loading = false;
        let body = response.json();
        let company = new Company(body);
        this.companies.push(company);
        return company;
      })
      .take(1);
  };


  /**
   * Возвращает массив всех компаний
   * @returns {Company[]}
   */
  getAllCompanies(): Company[] {
    return this.companies;
  };


  /**
   * Возвращает компанию по идентификатору
   * @param id {number} - идентификатор искомой компании
   * @returns {Company|null}
   */
  getCompanyById(id: number): Company|null {
    let length = this.companies.length;
    for (let i = 0; i < length; i++) {
      if (this.companies[i].id === id)
        return this.companies[i];
    }
    return null;
  };

}

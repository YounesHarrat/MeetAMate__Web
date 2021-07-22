import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  API_URL = "http://localhost:8000/";

  httpClient: HttpClient;

  resp: any = null;

  httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Headers':	'Content-Type, Authorization, access-control-allow-origin, responseType, access-control-allow-headers,access-control-allow-methods, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method, content_type',
      'Access-Control-Allow-Methods' : 'GET, POST, OPTIONS, PUT, DELETE',
      'Access-Control-Allow-Origin' : '*, http://localhost:4200',
    }),

  };

  constructor(private http: HttpClient) {
    this.httpClient = http;
  }

  public getAllGames(): any {
    return this.http.get(this.API_URL+'game/getAll', this.httpOptions );
  }

  public getAllUsers(): any {
    return this.http.get(this.API_URL+'user/getAll', this.httpOptions );
  }

  // public getUsers(): any {
  //   console.log('getUsers');

  //   this.http.get(this.API_URL, { responseType: 'json'}).subscribe(response => {
  //     this.resp = response;
  //     return response;
  //   });
  //   return this.resp;
  //   //  this.http.get(this.API_URL+'/user', this.httpOptions);
  // }


}


import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class GameService {

  API_URL = "http://localhost:8000/api";

  options = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Headers':	'Content-Type, Authorization, access-control-allow-origin, responseType, access-control-allow-headers,access-control-allow-methods, X-API-KEY, Origin, X-Requested-With, Accept, Access-Control-Request-Method',
      'Access-Control-Allow-Methods' : 'GET, POST, OPTIONS, PUT, DELETE',
      'Access-Control-Allow-Origin' : 'http://localhost:4200',
      'Allow': 'GET',
      'Content-Type': 'application/json; utf-8',
      'Accept': 'application/json',
    }),

  };

  constructor( private http: HttpClient) {
  }

  public getAllGame(): any {
  return (this.http.get<HttpResponse<any>[]>(this.API_URL+'/games', this.options )) ;
  }

}

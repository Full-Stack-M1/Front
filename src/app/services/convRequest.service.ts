import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Response } from '../models/response/response.model';

@Injectable({
  providedIn: 'root'
})
export class ConvRequestService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('token')})
  };
  private apiUrl = 'http://localhost:8080/api/conversation/';

  constructor(private httpClient: HttpClient) {  }

  getAll(): Observable<Response> {
    console.log(this.httpOptions);
    
    return this.httpClient.get<Response>(this.apiUrl, this.httpOptions)
  }

  getOne(id: string): Observable<Response> {
    console.log(this.apiUrl + id);
    
    return this.httpClient.get<Response>(this.apiUrl + id, this.httpOptions)
  }
}

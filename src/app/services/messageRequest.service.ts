import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Response } from '../models/response/response.model';

@Injectable({
  providedIn: 'root'
})
export class MessageRequestService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('token')})
  };
  private apiUrl = 'http://localhost:8080/api/message/';

  constructor(private httpClient: HttpClient) {  }

  createMessage(convId: string, content: string): Observable<Response> {
    return this.httpClient.post<Response>(this.apiUrl + convId, {content}, this.httpOptions)
  }
}

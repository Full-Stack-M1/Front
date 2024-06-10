import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Response } from '../models/response/response.model';
import { Conversation, ConversationCreate, ConversationSearch } from '../models/conversation/conversation.model';

@Injectable({
  providedIn: 'root'
})
export class ConvRequestService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('token')})
  };
  private apiUrl = 'https://back-p54j.onrender.com/api/conversation/';

  private searchedConversation?: Conversation[];

  constructor(private httpClient: HttpClient) {  }

  getAll(): Observable<Response> {
    return this.httpClient.get<Response>(this.apiUrl, this.httpOptions)
  }

  getOne(id: string): Observable<Response> {
    return this.httpClient.get<Response>(this.apiUrl + id, this.httpOptions)
  }

  getBySearch(searchParams: ConversationSearch): Observable<Response> {
    return this.httpClient.post<Response>(this.apiUrl + 'search', searchParams, this.httpOptions);
  }

  getSearchedConversation(): Conversation[] | undefined {
    return this.searchedConversation;
  }

  create(createParam: ConversationCreate): Observable<Response> {
    return this.httpClient.post<Response>(this.apiUrl, createParam, this.httpOptions);
  }
}

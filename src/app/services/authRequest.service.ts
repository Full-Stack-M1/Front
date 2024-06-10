import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User, UserLogin, UserRegister } from '../models/user/user.model';
import { Response } from '../models/response/response.model';

@Injectable({
  providedIn: 'root'
})
export class AuthRequestService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    
  }
  private apiUrl = 'https://back-p54j.onrender.com/api/auth/';

  constructor(private httpClient: HttpClient) {  }

  register(user: UserRegister): Observable<Response> {
    
    return this.httpClient.post<Response>(this.apiUrl + 'register', user, this.httpOptions)
    //return this.http.post<User>(this.apiUrl, user, this.httpOptions)
  }

  login(user: UserLogin): Observable<Response> {
      return this.httpClient.post<Response>(this.apiUrl + 'login', user, this.httpOptions)
  }

  getMe(): Observable<Response> {
    this.httpOptions.headers = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('token')});
    return this.httpClient.get<Response>(this.apiUrl + 'me', this.httpOptions)
  }
}

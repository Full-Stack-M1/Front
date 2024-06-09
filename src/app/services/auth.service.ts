import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private token: string = '';

  public login(token: string) {
    this.isAuthenticated$.next(true);
    this.token = token;
    localStorage.setItem('token', token);

    //gérer le cookie quand fonctionnera
  }

  public logout() {
    this.isAuthenticated$.next(false);
    this.token = '';
  }

  public getIsAuthenticated(): Observable<boolean> {
    return this.isAuthenticated$.asObservable();
  }

  public getToken(): string {
    return this.token;
  }

  constructor() { }

}

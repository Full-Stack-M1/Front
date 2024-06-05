import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  public login() {
    this.isAuthenticated$.next(true);

    //gérer le cookie quand fonctionnera
  }

  public logout() {
    this.isAuthenticated$.next(false);
  }

  public getIsAuthenticated(): Observable<boolean> {
    return this.isAuthenticated$.asObservable();
  }

  constructor() { }
}

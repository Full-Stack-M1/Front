import { Component, HostListener, inject, signal } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { LinkButtonComponent } from '../link-button/link-button.component';
import { AuthService } from '../../services/auth.service';
import { Observable, Subscription } from 'rxjs';
import { AuthRequestService } from '../../services/authRequest.service';
import { Response } from '../../models/response/response.model';
import { User } from '../../models/user/user.model';

@Component({
  selector: 'Header',
  standalone: true,
  imports: [ButtonComponent, LinkButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  private authReqService: AuthRequestService = inject(AuthRequestService);

  private isLoggedSub: Subscription = this.authService.getIsAuthenticated().subscribe(data => this.isLogged = data);
  // private token: string = localStorage.getItem('token') || "";
  
  public title = 'Mate Finder';
  public scrolled = "";
  public isLogged: boolean = true;
  public user?: User;
  public loaded = signal(false);

  constructor(private authService: AuthService) { } // Injecter le service dans le constructeur (Injection de dépendances

  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll() {
    //if the scroll is greater than 50px, add the class "fixed" to the header
    if (window.scrollY > 50) {
      this.scrolled = "fixed";
    }
    else {
      this.scrolled = "";
    }
    
  }

  ngOnInit() {
    this.authReqService.getMe().subscribe(
      (response: Response) => {
        this.user =  response.user!;
        this.user.username = this.capitalizeFirstLetter(this.user.username);
        this.loaded.set(true);
      }
    );
  }

  logout() {    
    this.authService.logout();
  }

  capitalizeFirstLetter(str:string):string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
}

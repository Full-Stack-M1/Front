import { Component, HostListener, inject } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { LinkButtonComponent } from '../link-button/link-button.component';
import { AuthService } from '../../services/auth.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'Header',
  standalone: true,
  imports: [ButtonComponent, LinkButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  private isLoggedSub: Subscription = this.authService.getIsAuthenticated().subscribe(data => this.isLogged = data);
  
  public title = 'Mate Finder';
  public scrolled = "";
  public isLogged: boolean = true;

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

  logout() {    
    this.authService.logout();
  }
}

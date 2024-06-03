import { Component, HostListener } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { LinkButtonComponent } from '../link-button/link-button.component';

@Component({
  selector: 'Header',
  standalone: true,
  imports: [ButtonComponent, LinkButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  title = 'Mate Finder';
  scrolled = "";

  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(event: any) {

    //if the scroll is greater than 57px, add the class "fixed" to the header
    if (window.scrollY > 57) {
      this.scrolled = "fixed";
    }
    else {
      this.scrolled = "";
    }
    
  }
}

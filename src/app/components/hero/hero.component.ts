import { Component } from '@angular/core';
import { LinkButtonComponent } from '../link-button/link-button.component';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'Hero',
  standalone: true,
  imports: [LinkButtonComponent, ButtonComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {

}

import { Component, inject } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'Home',
  standalone: true,
  imports: [HeroComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export default class HomePageComponent {
}

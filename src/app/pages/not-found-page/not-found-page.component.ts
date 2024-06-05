import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-found-page',
  standalone: true,
  imports: [],
  templateUrl: './not-found-page.component.html',
  styleUrl: './not-found-page.component.scss'
})
export default class NotFoundPageComponent {
  public router: Router = inject(Router);

  // constructor() {}

  

  // ngOnInit() {
  //   // setTimeout(() => {
  //   //   this.router.navigate(['/']);
  //   // }, 3000);
  // }
}

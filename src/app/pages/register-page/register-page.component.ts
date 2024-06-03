import { Component, inject } from '@angular/core';
import { FormsModule, FormControl, Validators, FormBuilder } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';

import { User } from '../../models/user/user.model';

@Component({
  selector: 'Register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.scss'
})
export default class RegisterPageComponent {
  private router = inject(Router);
  private formbuilder = inject(FormBuilder);
  public user: User;

  constructor() {
    this.user = new User(0, '', '', '');
  }

  private submitted = false;

  onSubmit(): void {
    this.submitted = true;
    if (!this.validateUser()) {
      return;
    }
    this.router.navigate(['/']);
  }

  validateUser(): boolean {
    const userForm = this.formbuilder.group({
      username: new FormControl(this.user.username, [Validators.minLength(3), Validators.maxLength(20)]),
      email: new FormControl(this.user.email, [Validators.email]),
      password: new FormControl(this.user.password, [Validators.minLength(5), Validators.maxLength(20)])
    });

    if (userForm.status === "INVALID") {
        return false;
      }
      return true;
  }

}

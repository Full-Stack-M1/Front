import { Component, inject } from '@angular/core';
import { FormsModule, FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { User } from '../../models/user/user.model';

@Component({
  selector: 'Register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.scss'
})
export default class RegisterPageComponent {
  private router: Router = inject(Router);
  private formbuilder: FormBuilder = inject(FormBuilder);
  public user: User = {id: 0, username: '', email: '', password: ''};
  public reason: string = "";

  onSubmit(): void {
    if (!this.validateUser()) {
      return;
    }
    console.log("connected");
    // appel api pour créer compte et connecter le compte
    this.router.navigate(['/']);
  }

  private validateUser(): boolean {
    const userForm: FormGroup = this.formbuilder.group({ //Validators pour créer l'utilisateur
      username: new FormControl(this.user.username, [Validators.minLength(3), Validators.maxLength(20)]),
      email: new FormControl(this.user.email, [Validators.email]),
      password: new FormControl(this.user.password, [Validators.minLength(5), Validators.maxLength(20)])
    });

    if (userForm.status === "INVALID") {
      this.reason = this.errorReader(userForm);
      console.log(userForm);
      
      return false;
    }
    return true;
  }

  private errorReader(userForm: FormGroup): string {
    if (userForm.controls['username'].status === "INVALID") {
      return "Username must be between 3 and 20 characters";
    }
    if (userForm.controls['password'].status === "INVALID") {
      return "Password must be between 5 and 20 characters";
    }
    return "";
  }
}

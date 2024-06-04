import { Component, inject } from '@angular/core';
import { UserLogin } from '../../models/user/user.model';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'Login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export default class LoginPageComponent {
  private router: Router = inject(Router);
  private formbuilder: FormBuilder = inject(FormBuilder);
  public user: UserLogin = {username: '', password: ''};
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
    const userForm: FormGroup = this.formbuilder.group({ // même validators que pour le register mais sans l'email
      username: new FormControl(this.user.username, [Validators.minLength(3), Validators.maxLength(20)]),
      password: new FormControl(this.user.password, [Validators.minLength(5), Validators.maxLength(20)])
    });

    if (userForm.status === "INVALID") {
      this.reason = this.errorReader(userForm);
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

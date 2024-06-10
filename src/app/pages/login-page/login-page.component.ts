import { Component, inject } from '@angular/core';
import { UserLogin } from '../../models/user/user.model';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { AuthRequestService } from '../../services/authRequest.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Response } from '../../models/response/response.model';

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
  private authService: AuthService = inject(AuthService);
  private authRequest: AuthRequestService = inject(AuthRequestService);
  
  public user: UserLogin = {username: '', password: ''};
  public reason: string = "";

  onSubmit(): void {
    if (!this.validateUser()) {
      return;
    }
    this.authRequest.login(this.user).subscribe(
      (response: Response) => {
        this.authService.login(response.token!);
        this.router.navigate(['/']);
      },
      (error: HttpErrorResponse) => {
        this.reason = error.error.message;
        console.error("Error connecting user", error);
      }
    );
  }

  // Validators pour créer l'utilisateur
  private validateUser(): boolean {
    const userForm: FormGroup = this.formbuilder.group({ // Validators pour connecter l'utilisateur
      username: new FormControl(this.user.username, [Validators.minLength(3), Validators.maxLength(20)]),
      password: new FormControl(this.user.password, [Validators.minLength(5), Validators.maxLength(20)])
    });

    if (userForm.status === "INVALID") {
      this.reason = this.errorReader(userForm);
      return false;
    }
    return true;
  }

  // Fonction pour lire les erreurs
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

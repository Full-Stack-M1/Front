import { Component, inject } from '@angular/core';
import { FormsModule, FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { UserRegister } from '../../models/user/user.model';
import { AuthService } from '../../services/auth.service';
import { AuthRequestService } from '../../services/authRequest.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Response } from '../../models/response/response.model';

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
  private authService: AuthService = inject(AuthService);
  private authRequest: AuthRequestService = inject(AuthRequestService);

  public user: UserRegister = {username: '', email: '', password: ''};
  public reason: string = "";

  onSubmit(): void {
    if (!this.validateUser()) {
      return;
    }
    console.log("Registering user");
    this.authRequest.register(this.user).subscribe(
      (response: Response) => {
        console.log(response);
        
        console.log("User registered", response);
        this.authService.login(response.token!);
      },
      (error: HttpErrorResponse) => {
        console.error("Error registering user", error);
      }
    );
    this.router.navigate(['/']);
  }

  // Validators pour créer l'utilisateur
  private validateUser(): boolean {
    const userForm: FormGroup = this.formbuilder.group({ // Validators pour créer l'utilisateur
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

  // Fonction pour lire les erreurs
  private errorReader(userForm: FormGroup): string {
    if (userForm.controls['username'].status === "INVALID") {
      return "Username must be between 3 and 20 characters";
    }
    if (userForm.controls['email'].status === "INVALID") {
      return "Email must be a valid email";
    }
    if (userForm.controls['password'].status === "INVALID") {
      return "Password must be between 5 and 20 characters";
    }
    return "";
  }
}

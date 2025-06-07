import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../@core/auth/auth.service';

@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  username = '';
  password = '';
  error = '';

  constructor(private auth: AuthService, private router: Router) {}

  login() {
    const success = this.auth.login(this.username, this.password);
    if (success) {
      this.router.navigate(['/pages/dashboard']);
    } else {
      this.error = 'Nom d’utilisateur ou mot de passe incorrect';
    }
  }
}

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

export type Role = 'admin' | 'university' | 'student';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private tokenKey = 'auth-token';
  private userRoleKey = 'user-role';

  constructor(private router: Router) {}

  login(username: string, password: string): boolean {
    const credentials = {
      admin: 'admin',
      university: 'uni',
      student: 'student'
    };

    if (credentials[username] && credentials[username] === password) {
      localStorage.setItem(this.tokenKey, 'dummy-token');
      localStorage.setItem(this.userRoleKey, username as Role);
      return true;
    }
    return false;
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey);
    localStorage.removeItem(this.userRoleKey);
    this.router.navigate(['/auth/login']);
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem(this.tokenKey);
  }

  getRole(): Role | null {
    return localStorage.getItem(this.userRoleKey) as Role;
  }
}

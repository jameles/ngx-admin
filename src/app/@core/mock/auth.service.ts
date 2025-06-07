import { Injectable } from '@angular/core';
import { User } from '../data/user';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private currentUser: User | null = null;

  private users: User[] = [
    { id: 1, username: 'admin', password: 'admin', role: 'admin' },
    { id: 2, username: 'uni1', password: 'uni', role: 'university' },
    { id: 3, username: 'stu1', password: 'student', role: 'student' },
  ];

  login(username: string, password: string): boolean {
    const user = this.users.find(u => u.username === username && u.password === password);
    if (user) {
      this.currentUser = user;
      localStorage.setItem('user', JSON.stringify(user));
      return true;
    }
    return false;
  }

  logout(): void {
    this.currentUser = null;
    localStorage.removeItem('user');
    this.router.navigate(['/auth/login']);
  }

  getCurrentUser(): User | null {
    return this.currentUser ?? JSON.parse(localStorage.getItem('user') || 'null');
  }

  constructor(private router: Router) {}
}

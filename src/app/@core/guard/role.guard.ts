import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { AuthService } from '../mock/auth.service';

@Injectable({ providedIn: 'root' })
export class RoleGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const expectedRole = route.data['role'];
    const user = this.auth.getCurrentUser();

    if (!user || (expectedRole && user.role !== expectedRole)) {
      this.router.navigate(['/auth/login']);
      return false;
    }
    return true;
  }
}

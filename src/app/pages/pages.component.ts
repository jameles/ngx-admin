import { Component } from '@angular/core';
import { NbMenuService } from '@nebular/theme';
import { AuthService } from '../@core/auth/auth.service';
import { getMenuItems } from './pages-menu';

@Component({
  selector: 'ngx-pages',
  template: `
    <ngx-one-column-layout>
      <router-outlet></router-outlet>
    </ngx-one-column-layout>
  `,
})
export class PagesComponent {
  constructor(menuService: NbMenuService, auth: AuthService) {
    const role = auth.getRole();
    const items = getMenuItems(role ?? '');
    menuService.addItems(items);
  }
}

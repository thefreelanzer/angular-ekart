import { Component, inject } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'top-menu',
  standalone: true,
  imports: [],
  templateUrl: './top-menu.component.html',
  styleUrl: './top-menu.component.css',
})
export class TopMenuComponent {
  route: Router = inject(Router);
  navigateTo() {
    this.route.navigateByUrl('courses');
  }
}

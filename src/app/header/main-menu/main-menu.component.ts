import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';

@Component({
  selector: 'main-menu',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './main-menu.component.html',
  styleUrl: './main-menu.component.css',
})
export class MainMenuComponent {
  // menuItems: string[] = ['Home', 'Products', 'About', 'Contact'];
  menuItems: { label: string; route: string }[] = [
    { label: 'Home', route: '/home' },
    { label: 'Products', route: '/products' },
    { label: 'About', route: '/about' },
    { label: 'Contact', route: '/contact' },
  ];
  route: Router = inject(Router);

  navigateTo(url: string) {
    // this.route.navigate([url]);
    this.route.navigateByUrl(url);
  }
}

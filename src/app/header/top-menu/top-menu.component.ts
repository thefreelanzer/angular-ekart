import { Component, inject } from '@angular/core';
import { Route, Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'top-menu',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './top-menu.component.html',
  styleUrl: './top-menu.component.css',
})
export class TopMenuComponent {
  constructor(private route: Router, public authService: AuthService) {}

  ngOnInit() {}

  navigateTo() {
    this.route.navigateByUrl('courses');
  }
}

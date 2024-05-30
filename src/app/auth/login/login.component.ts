import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  paramMapObj: any;

  constructor(
    private authService: AuthService,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) {}
  username: string = '';
  password: string = '';
  submitState: boolean = false;
  onSubmit() {
    this.submitState = true;
    let user = this.authService.login(this.username, this.password);
    if (user === undefined) {
      alert('Invalid credentials');
    } else {
      this.router.navigateByUrl('products');
    }
  }

  canExit() {
    if ((this.username || this.password) && !this.submitState) {
      return confirm('You have unsaved changes. Do you want to navigate away?');
    } else {
      return true;
    }
  }

  ngOnInit() {
    this.paramMapObj = this.activeRoute.queryParamMap.subscribe((queries) => {
      let logout = Boolean(queries.get('logout'));
      if (logout) {
        this.authService.logout();
        // alert('You are logged out');
      }
    });
  }
}

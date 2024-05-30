import { Injectable } from '@angular/core';
import { UsersService } from '../users/users.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private usersService: UsersService) {}

  isLoggedIn: boolean = false;

  login(username: string, password: string) {
    let user = this.usersService.users.find(
      (u) => u.user_name === username && u.password === password
    );

    if (user === undefined) this.isLoggedIn = false;
    else this.isLoggedIn = true;
    return user;
  }

  logout() {
    this.isLoggedIn = false;
  }

  isAuthenticated() {
    return this.isLoggedIn;
  }
}

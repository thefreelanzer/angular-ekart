import { Injectable } from '@angular/core';
import { User } from '../../Models/User';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor() {}

  users = [
    {
      id: 1,
      name: 'a',
      user_name: 'a1',
      email: 'a1@gmail.com',
      password: '1234',
    },
    {
      id: 2,
      name: 'b',
      user_name: 'b1',
      email: 'b1@gmail.com',
      password: '1234',
    },
    {
      id: 3,
      name: 'c',
      user_name: 'c1',
      email: 'c1@gmail.com',
      password: '1234',
    },
    {
      id: 4,
      name: 'd',
      user_name: 'd1',
      email: 'd1@gmail.com',
      password: '1234',
    },
    {
      id: 5,
      name: 'e',
      user_name: 'e1',
      email: 'e1@gmail.com',
      password: '1234',
    },
  ];
}

import { Injectable } from '@angular/core';
import { User } from '../../Models/User';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor() {}

  users: User[] = [
    {
      id: 1,
      name: 'James',
      user_name: 'a1',
      email: 'James@gmail.com',
      password: '1234',
      dob: new Date('01-01-1991'),
      mark: 400,
      gender: 'Male',
      fee: 2500,
    },
    {
      id: 2,
      name: 'John',
      user_name: 'b1',
      email: 'john@gmail.com',
      password: '1234',
      dob: new Date('02-02-1992'),
      mark: 430,
      gender: 'Male',
      fee: 1000,
    },
    {
      id: 3,
      name: 'Jacob',
      user_name: 'c1',
      email: 'jacob@gmail.com',
      password: '1234',
      dob: new Date('03-03-1993'),
      mark: 420,
      gender: 'Male',
      fee: 2000,
    },
    {
      id: 4,
      name: 'George',
      user_name: 'd1',
      email: 'jeorge@gmail.com',
      password: '1234',
      dob: new Date('04-04-1993'),
      mark: 410,
      gender: 'Male',
      fee: 3000,
    },
    {
      id: 5,
      name: 'Samuel',
      user_name: 'e1',
      email: 'samuel@gmail.com',
      password: '1234',
      dob: new Date('05-05-1992'),
      mark: 450,
      gender: 'Male',
      fee: 4000,
    },
  ];

  totalMarks: number = 500;
  totalUsers = new Promise((resolve, rejection) => {
    setTimeout(() => {
      resolve(this.users.length);
    }, 2000);
  });

  filterByGender(filterBy: string) {
    if (filterBy.toLowerCase() === 'all' || filterBy.toLowerCase() === '') {
      return this.users;
    } else {
      return this.users.filter((user) => {
        return user.gender.toLowerCase() === filterBy.toLowerCase();
      });
    }
  }

  CreateStudent(data: any) {
    data.id = this.users.length + 1;
    data.user_name = this.createUsername(data.email) + data.id;
    data.password = '1234';
    let user = new User(data);
    this.users.push(user);
  }

  createUsername(email: string) {
    if (!email) return '';
    const index = email.indexOf('@');
    return index !== -1 ? email.substring(0, index) : email;
  }
}

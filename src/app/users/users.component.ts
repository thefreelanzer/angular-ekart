import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { User } from '../Models/User';
import { UsersService } from '../services/users/users.service';
import { FormsModule } from '@angular/forms';
import { PercentagePipe } from '../Pipes/percentage.pipe';
import { UsersFilterPipe } from '../Pipes/users-filter.pipe';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, FormsModule, PercentagePipe, UsersFilterPipe],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent {
  constructor(private usersService: UsersService) {}
  users: User[];
  totalMark: number = this.usersService.totalMarks;
  filterText: string = 'All';
  isAddingNewUser = false;
  newUser: User = this.getNewUserTemplate();
  totalUsers = this.usersService.totalUsers;
  isEditing: boolean = false;
  selectedUser: User;
  userIdToEdit: number;

  ngOnInit() {
    this.users = this.usersService.filterByGender(this.filterText);
  }

  showNewUserForm() {
    this.isAddingNewUser = true;
  }

  getNewUserTemplate(): User {
    return {
      id: 0,
      name: '',
      email: '',
      gender: 'Male',
      dob: new Date(),
      mark: 0,
      fee: 0,
      user_name: '',
      password: '',
    };
  }

  filterGender(event: any) {
    let gender = event.target.value;
    // if (gender === 'All') {
    //   this.users = this.users;
    // } else {
    //   this.users = this.users.filter((user) => user.gender === gender);
    // }
    this.users = this.usersService.filterByGender(gender);
  }

  saveNewUser() {
    this.usersService.CreateStudent(this.newUser);
    this.isAddingNewUser = false;
  }

  editUser(user: User) {
    this.isEditing = true;
    this.userIdToEdit = user.id;
    this.selectedUser = user;
    console.log(this.isEditing);
  }
  deleteUser(user: number) {}

  updateUser() {
    this.isEditing = false;
  }
}

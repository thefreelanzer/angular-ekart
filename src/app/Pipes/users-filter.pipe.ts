import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../Models/User';

@Pipe({
  name: 'user-filter',
  standalone: true,
})
export class UsersFilterPipe implements PipeTransform {
  transform(list: User[], filterBy: string): User[] {
    if (filterBy.toLowerCase() === 'all' || filterBy.toLowerCase() === '') {
      return list;
    } else {
      return list.filter((user) => {
        return user.gender.toLowerCase() === filterBy.toLowerCase();
      });
    }
  }
}

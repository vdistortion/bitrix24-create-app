import { Component } from '@angular/core';
import {
  UserToggleComponent,
  TType,
} from '../user-toggle/user-toggle.component';
import {
  UserListComponent,
  IUsers,
  IUser,
} from '../user-list/user-list.component';
import { RootStoreService } from '../../services/root-store.service';

@Component({
  selector: 'app-user-lists',
  standalone: true,
  imports: [UserToggleComponent, UserListComponent],
  templateUrl: './user-lists.component.html',
  styleUrl: './user-lists.component.scss',
})
export class UserListsComponent {
  public type: TType = 'users';
  private users: IUsers;

  constructor(private rootStore: RootStoreService) {
    this.users = this.rootStore.users;
    console.log(this.rootStore.users);
  }

  get usersEnabled(): IUsers {
    const list = Object.entries(this.users).filter(
      ([_key, user]: [string, IUser]) => user.active,
    );
    return Object.fromEntries(list);
  }

  get usersDisabled(): IUsers {
    const list = Object.entries(this.users).filter(
      ([_key, user]: [string, IUser]) => !user.active,
    );
    return Object.fromEntries(list);
  }

  setType(type: TType) {
    this.type = type;
  }
}

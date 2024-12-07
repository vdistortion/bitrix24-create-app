import { ChangeDetectionStrategy, Component } from '@angular/core';
import { UserToggleComponent } from '../user-toggle/user-toggle.component';
import { UserListComponent } from '../user-list/user-list.component';
import { RootStoreService } from '../../services/root-store.service';

@Component({
  selector: 'app-user-lists',
  imports: [UserToggleComponent, UserListComponent],
  templateUrl: './user-lists.component.html',
  styleUrl: './user-lists.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserListsComponent {
  public type: TUserType = 'users';

  constructor(private rootStore: RootStoreService) {}

  get usersEnabled(): IUsers {
    const list = Object.entries(this.rootStore.users as IUsers).filter(
      ([_key, user]: [string, IUser]) => user.active,
    );
    return Object.fromEntries(list);
  }

  get usersDisabled(): IUsers {
    const list = Object.entries(this.rootStore.users as IUsers).filter(
      ([_key, user]: [string, IUser]) => !user.active,
    );
    return Object.fromEntries(list);
  }

  setType(type: TUserType) {
    this.type = type;
  }
}

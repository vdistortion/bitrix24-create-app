import { ChangeDetectionStrategy, Component } from '@angular/core';
import { UserToggleComponent, type UserType } from '../user-toggle/user-toggle.component';
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
  public type: UserType = 'users';

  constructor(private rootStore: RootStoreService) {}

  get usersEnabled(): Record<string, IUserNew> {
    const list = Object.entries(this.rootStore.users as Record<string, IUserNew>).filter(
      ([_key, user]) => user.active,
    );
    return Object.fromEntries(list);
  }

  get usersDisabled(): Record<string, IUserNew> {
    const list = Object.entries(this.rootStore.users as Record<string, IUserNew>).filter(
      ([_key, user]) => !user.active,
    );
    return Object.fromEntries(list);
  }

  setType(type: UserType) {
    this.type = type;
  }
}

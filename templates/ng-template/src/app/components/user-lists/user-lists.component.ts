import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { UserToggleComponent, type UserType } from '../user-toggle/user-toggle.component';
import { UserListComponent } from '../user-list/user-list.component';
import { StoreService } from '../../services/store.service';

@Component({
  selector: 'app-user-lists',
  imports: [UserToggleComponent, UserListComponent],
  templateUrl: './user-lists.component.html',
  styleUrl: './user-lists.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserListsComponent {
  protected store = inject(StoreService);
  public type: UserType = 'users';

  setType(type: UserType) {
    this.type = type;
  }
}

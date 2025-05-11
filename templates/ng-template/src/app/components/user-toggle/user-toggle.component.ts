import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';

export type UserType = 'users' | 'disabled';

@Component({
  selector: 'app-user-toggle',
  imports: [],
  templateUrl: './user-toggle.component.html',
  styleUrl: './user-toggle.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserToggleComponent {
  @Output() public click = new EventEmitter<UserType>();
  public type: UserType = 'users';

  protected onClick(e: MouseEvent, type: UserType) {
    e.stopPropagation();
    this.type = type;
    this.click.emit(type);
  }
}

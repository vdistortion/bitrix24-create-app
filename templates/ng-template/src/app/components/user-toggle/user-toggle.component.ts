import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-user-toggle',
  standalone: true,
  imports: [],
  templateUrl: './user-toggle.component.html',
  styleUrl: './user-toggle.component.scss',
})
export class UserToggleComponent {
  @Output() public click: EventEmitter<TUserType> =
    new EventEmitter<TUserType>();
  public type: TUserType = 'users';

  protected onClick(e: MouseEvent, type: TUserType) {
    e.stopPropagation();
    this.type = type;
    this.click.emit(type);
  }
}

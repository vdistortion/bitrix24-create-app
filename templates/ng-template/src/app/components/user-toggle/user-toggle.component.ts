import { Component, EventEmitter, Input, Output } from '@angular/core';

export type TType = 'users' | 'disabled';

@Component({
  selector: 'app-user-toggle',
  standalone: true,
  imports: [],
  templateUrl: './user-toggle.component.html',
  styleUrl: './user-toggle.component.scss',
})
export class UserToggleComponent {
  @Output() public click: EventEmitter<TType> = new EventEmitter<TType>();
  public type: TType = 'users';

  protected onClick(type: TType) {
    this.type = type;
    this.click.emit(type);
  }
}

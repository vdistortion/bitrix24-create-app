import { Component, Input, OnInit } from '@angular/core';
import { BitrixService } from '../../services/bitrix.service';
import { RootStoreService } from '../../services/root-store.service';

export interface IUser {
  id: string;
  fullName: string;
  active: boolean;
  position: string;
  birthday: string | boolean;
  photo: string;
  department: number[];
  href: string;
  target: string;
}

export interface IUsers {
  [key: string]: IUser;
}

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss',
})
export class UserListComponent implements OnInit {
  @Input({ required: true }) public users: IUsers;
  private department: any;
  private currentId: any;
  protected portal: any;

  constructor(
    private bitrixService: BitrixService,
    private rootStoreService: RootStoreService,
  ) {}

  ngOnInit() {
    this.department = this.rootStoreService.department;
    this.currentId = this.rootStoreService.currentId;
    this.portal = this.rootStoreService.portal;
  }

  getUsers(): IUser[] {
    return Object.values(this.users);
  }

  classList(id: string) {
    return {
      department: this.department.includes(id),
      current: this.currentId === id,
    };
  }

  getTitle(user: any) {
    return [user.fullName, user.position].filter((s) => s).join('\n');
  }

  openLink(e: MouseEvent, href: string) {
    e.preventDefault();
    this.bitrixService.BX24.openLink(href);
  }

  openMessenger(id: string) {
    this.bitrixService.BX24.im.openMessenger(id);
  }

  openHistory(id: string) {
    this.bitrixService.BX24.im.openHistory(id);
  }
}

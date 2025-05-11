import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Input,
  OnInit,
} from '@angular/core';
import { BitrixService } from '../../services/bitrix.service';
import { RootStoreService } from '../../services/root-store.service';

@Component({
  selector: 'app-user-list',
  imports: [],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserListComponent implements OnInit {
  @Input({ required: true }) public users!: IUsers;
  private bitrixService = inject(BitrixService);
  private BX24 = this.bitrixService.get();
  private department: any;
  private currentId: any;
  protected portal: any;

  constructor(private rootStoreService: RootStoreService) {}

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
    this.bitrixService.openLink(href);
  }

  openMessenger(id: string) {
    this.BX24.im.openMessenger(id);
  }
}

import { ChangeDetectionStrategy, Component, inject, Input } from '@angular/core';
import { BitrixService } from '../../services/bitrix.service';

@Component({
  selector: 'app-user-list',
  imports: [],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserListComponent {
  @Input({ required: true }) public users!: Record<string, IUserNew>;
  private bitrixService = inject(BitrixService);
  private BX24 = this.bitrixService.get();
  protected portal = `https://${this.BX24.getDomain()}`;

  getUsers() {
    return Object.values(this.users);
  }

  getTitle(user: IUserNew) {
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

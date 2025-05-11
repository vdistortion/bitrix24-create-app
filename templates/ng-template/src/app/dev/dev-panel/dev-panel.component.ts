import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {
  mdiDownload,
  mdiFormatListBulletedType,
  mdiHome,
  mdiReceiptTextPlus,
  mdiReload,
  mdiTools,
} from '@mdi/js';
import { DevPanelReloadComponent } from '../dev-panel-reload/dev-panel-reload.component';
import { DevPanelPagesComponent } from '../dev-panel-pages/dev-panel-pages.component';
import { DevPanelDownloadComponent } from '../dev-panel-download/dev-panel-download.component';
import { IconComponent } from '../../ui/icon/icon.component';
import { BitrixService } from '../../services/bitrix.service';

@Component({
  selector: 'dev-panel',
  imports: [
    DevPanelReloadComponent,
    DevPanelPagesComponent,
    DevPanelDownloadComponent,
    IconComponent,
  ],
  templateUrl: './dev-panel.component.html',
  styleUrl: './dev-panel.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DevPanelComponent {
  private bitrixService = inject(BitrixService);
  private BX24 = this.bitrixService.get();
  protected buttons = [
    {
      admin: true,
      path: '/',
      title: 'На главную',
      icon: mdiHome,
    },
    {
      admin: false,
      path: '/generator',
      title: 'Генератор данных',
      icon: mdiReceiptTextPlus,
    },
    {
      admin: true,
      path: '/placement',
      title: 'Настройки встраивания',
      icon: mdiTools,
    },
    {
      admin: false,
      path: '/example',
      title: 'Компоненты',
      icon: mdiFormatListBulletedType,
    },
  ];
  protected icons = {
    mdiReload,
    mdiDownload,
  };

  protected get pages() {
    const isAdmin = this.BX24.isAdmin();
    if (isAdmin) return this.buttons;
    return this.buttons.filter((btn) => !btn.admin);
  }
}

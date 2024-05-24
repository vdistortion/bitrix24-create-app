import { Component } from '@angular/core';
import {
  mdiDownload,
  mdiFormatListBulletedType,
  mdiHome,
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
  standalone: true,
  imports: [
    DevPanelReloadComponent,
    DevPanelPagesComponent,
    DevPanelDownloadComponent,
    IconComponent,
  ],
  templateUrl: './dev-panel.component.html',
  styleUrl: './dev-panel.component.scss',
})
export class DevPanelComponent {
  protected buttons = [
    {
      admin: true,
      path: '/',
      title: 'На главную',
      icon: mdiHome,
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

  constructor(private bitrixService: BitrixService) {}

  protected get pages() {
    const isAdmin = this.bitrixService.BX24.isAdmin();
    if (isAdmin) return this.buttons;
    return this.buttons.filter((btn) => !btn.admin);
  }
}

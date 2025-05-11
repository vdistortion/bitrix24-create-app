import { ChangeDetectionStrategy, Component } from '@angular/core';
import { mdiDownload, mdiFormatListBulletedType, mdiHome, mdiReload, mdiTools } from '@mdi/js';
import { DevPanelReloadComponent } from '../dev-panel-reload/dev-panel-reload.component';
import { DevPanelPagesComponent } from '../dev-panel-pages/dev-panel-pages.component';
import { DevPanelDownloadComponent } from '../dev-panel-download/dev-panel-download.component';
import { IconComponent } from '../../ui/icon/icon.component';

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
  protected pages = [
    {
      path: '/',
      title: 'На главную',
      icon: mdiHome,
    },
    {
      path: '/settings',
      title: 'Настройки',
      icon: mdiTools,
    },
    {
      path: '/example',
      title: 'Компоненты',
      icon: mdiFormatListBulletedType,
    },
  ];
  protected icons = {
    mdiReload,
    mdiDownload,
  };
}

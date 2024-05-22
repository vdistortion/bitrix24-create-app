import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import Bitrix24 from 'bitrix24-library';
import { BitrixService } from './services/bitrix.service';
import { DevPanelComponent } from './dev/dev-panel/dev-panel.component';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DevPanelComponent],
  template: `
    @if (isDev) {
      <dev-panel></dev-panel>
    }
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {
  protected isDev: boolean = false;

  constructor(private bitrixService: BitrixService) {
    Bitrix24.init().then((BX24: any) => {
      this.bitrixService.init(BX24);
      this.isDev = environment.TEST_DOMAINS.includes(BX24.getDomain());
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import Bitrix24 from 'bitrix24-library';
import { RootStoreService } from './services/root-store.service';
import {
  PlacementStoreService,
  IList,
} from './services/placement-store.service';
import { DevPanelComponent } from './dev/dev-panel/dev-panel.component';
import { environment } from '../environments/environment';
import { BitrixService } from './services/bitrix.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DevPanelComponent],
  template: `
    @if (isDev) {
      <dev-panel></dev-panel>
    }
    @if (isApp) {
      <router-outlet></router-outlet>
    }
  `,
})
export class AppComponent implements OnInit {
  protected isDev: boolean = false;
  protected isApp: boolean = false;

  constructor(
    private bitrixService: BitrixService,
    private rootStoreService: RootStoreService,
    private placementStoreService: PlacementStoreService,
  ) {}

  async ngOnInit(): Promise<void> {
    const BX24 = await Bitrix24.init();
    this.bitrixService.init(BX24);

    await this.rootStoreService.init().then((list: IList) => {
      this.placementStoreService.setList(list);
    });

    await this.rootStoreService
      .appInfo()
      .then(({ scope }: { scope: string[] }) => {
        this.verifyScopeLog(environment.SCOPE, scope);
      });

    this.isDev = environment.TEST_DOMAINS.includes(
      this.bitrixService.BX24.getDomain(),
    );

    this.isApp = true;
  }

  verifyScopeLog(scopeList: string[], requiredList: string[]) {
    [...scopeList, ...requiredList].forEach((scope: string) => {
      const message = `🔥 scope "${scope}" `;
      if (!scopeList.includes(scope)) console.info(message + 'excess');
      if (!requiredList.includes(scope)) console.info(message + 'not found');
    });
  }
}

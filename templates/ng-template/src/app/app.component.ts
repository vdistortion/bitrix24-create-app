import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Bitrix24, type IBitrix24Library } from 'bitrix24-library';
import { DevPanelComponent } from './dev/dev-panel/dev-panel.component';
import { BitrixService } from './services/bitrix.service';
import { RootStoreService } from './services/root-store.service';
import { PlacementStoreService } from './services/placement-store.service';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DevPanelComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
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

  async ngOnInit() {
    const BX24: IBitrix24Library = await Bitrix24();
    this.bitrixService.init(BX24);

    await this.rootStoreService.init().then((list: IPlacements) => {
      this.placementStoreService.setList(list);
    });

    await this.rootStoreService
      .appInfo()
      .then(({ scope }: { scope: string[] }) => {
        this.verifyScopeLog(environment.SCOPE, scope);
      });

    // @ts-ignore
    this.isDev = environment.TEST_DOMAINS.includes(BX24.getDomain());
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

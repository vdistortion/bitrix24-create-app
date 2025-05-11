import {
  ChangeDetectorRef,
  ChangeDetectionStrategy,
  Component,
  OnInit,
  inject,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
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
  private bitrixService = inject(BitrixService);
  private BX24 = this.bitrixService.get();
  protected isDev = false;
  protected isApp = false;

  constructor(
    private cdr: ChangeDetectorRef,
    private rootStoreService: RootStoreService,
    private placementStoreService: PlacementStoreService,
  ) {}

  async ngOnInit() {
    await this.rootStoreService.init().then((list: Record<string, IPlacement>) => {
      this.placementStoreService.setList(list);
    });

    await this.rootStoreService.appInfo().then(({ scope }: { scope: string[] }) => {
      this.verifyScopeLog(environment.SCOPE, scope);
    });

    this.cdr.markForCheck();
    this.isDev = environment.TEST_DOMAINS.includes(this.BX24.getDomain());
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

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
    @if (scopeWarning) {
      <mark>🔥 {{ scopeWarning }}</mark>
    }
  `,
})
export class AppComponent implements OnInit {
  private cdr = inject(ChangeDetectorRef);
  private store = inject(RootStoreService);
  private bitrixService = inject(BitrixService);
  private BX24 = this.bitrixService.get();
  protected isDev = false;
  protected isApp = false;
  scopeWarning = '';

  async ngOnInit() {
    this.store.init().then(() => {
      const list: string[] = [];

      environment.SCOPE.forEach((scope: string) => {
        if (!this.store.scopeList.includes(scope)) list.push(scope);
      });

      if (list.length === 1) this.scopeWarning = `Не подключен scope ${list.join(', ')}`;
      if (list.length > 1) this.scopeWarning = `Не подключены scope: ${list.join(', ')}`;
    });

    this.isDev = environment.TEST_DOMAINS.includes(this.BX24.getDomain());
    this.isApp = true;
    this.cdr.markForCheck();
  }
}

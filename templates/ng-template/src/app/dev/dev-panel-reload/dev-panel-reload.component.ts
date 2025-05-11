import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { BitrixService } from '../../services/bitrix.service';

@Component({
  selector: 'dev-panel-reload',
  imports: [],
  templateUrl: './dev-panel-reload.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DevPanelReloadComponent implements OnInit {
  private bitrixService = inject(BitrixService);
  private BX24 = this.bitrixService.get();

  ngOnInit() {
    this.BX24.bind(window, 'keydown', (e) => {
      if (e instanceof KeyboardEvent && e.ctrlKey && e.code === 'KeyR') {
        this.reload(e);
      }
    });
  }

  reload(e: Event) {
    e.preventDefault();
    window.location.reload();
  }
}

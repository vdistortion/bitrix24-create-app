import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BitrixService } from '../../services/bitrix.service';

@Component({
  selector: 'dev-panel-reload',
  imports: [],
  templateUrl: './dev-panel-reload.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DevPanelReloadComponent implements OnInit {
  constructor(private bitrixService: BitrixService) {}

  ngOnInit() {
    this.bitrixService.BX24.bind(window, 'keydown', (e: KeyboardEvent) => {
      if (e.ctrlKey && e.code === 'KeyR') {
        this.reload(e);
      }
    });
  }

  reload(e: Event) {
    e.preventDefault();
    window.location.reload();
  }
}

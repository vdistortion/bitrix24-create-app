import { Component, OnInit } from '@angular/core';
import { BitrixService } from '../../services/bitrix.service';

@Component({
  selector: 'dev-panel-reload',
  standalone: true,
  imports: [],
  templateUrl: './dev-panel-reload.component.html',
  styleUrl: './dev-panel-reload.component.scss',
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

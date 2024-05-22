import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import Bitrix24 from 'bitrix24-library';
import { BitrixService } from './services/bitrix.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(private bitrixService: BitrixService) {
    Bitrix24.init().then((BX24: any) => {
      bitrixService.init(BX24);
    });
  }
}

import { Component, Input } from '@angular/core';
import { BitrixService } from '../../services/bitrix.service';

@Component({
  selector: 'app-link',
  standalone: true,
  imports: [],
  templateUrl: './link.component.html',
})
export class LinkComponent {
  @Input({ required: true }) public href: string;
  private readonly $BX24: any;

  constructor(private bitrixService: BitrixService) {
    this.$BX24 = this.bitrixService.BX24;
  }

  onClick(e: Event) {
    if (this.$BX24) {
      e.preventDefault();
      this.$BX24.openLink(this.href);
    }
  }

  onMiddleClick(e: Event) {
    if (this.$BX24) {
      e.preventDefault();
      this.$BX24.openLink(this.href, true);
    }
  }
}

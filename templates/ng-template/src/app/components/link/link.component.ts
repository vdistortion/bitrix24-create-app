import { ChangeDetectionStrategy, Component, inject, Input } from '@angular/core';
import { BitrixService } from '../../services/bitrix.service';

@Component({
  selector: 'app-link',
  imports: [],
  templateUrl: './link.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LinkComponent {
  @Input({ required: true }) public href!: string;
  private bitrixService = inject(BitrixService);

  onClick(e: MouseEvent) {
    e.preventDefault();
    this.bitrixService.openLink(this.href);
  }

  onMiddleClick(e: MouseEvent) {
    e.preventDefault();
    this.bitrixService.openLink(this.href, true);
  }
}

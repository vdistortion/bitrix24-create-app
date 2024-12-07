import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'dev-panel-pages',
  imports: [RouterLink],
  templateUrl: './dev-panel-pages.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DevPanelPagesComponent {
  @Input({ required: true }) public path: string;
  @Input({ required: true }) public title: string;
}

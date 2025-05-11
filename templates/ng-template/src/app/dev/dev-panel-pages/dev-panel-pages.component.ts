import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'dev-panel-pages',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './dev-panel-pages.component.html',
  styleUrl: './dev-panel-pages.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DevPanelPagesComponent {
  @Input({ required: true }) public path!: string;
  @Input({ required: true }) public title!: string;
}

import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'dev-panel-pages',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './dev-panel-pages.component.html',
  styleUrl: './dev-panel-pages.component.scss',
})
export class DevPanelPagesComponent {
  @Input({ required: true }) public path: string;
  @Input({ required: true }) public title: string;
}

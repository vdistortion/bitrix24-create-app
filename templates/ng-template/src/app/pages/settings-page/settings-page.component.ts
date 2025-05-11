import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { GeneratorListComponent } from '../../components/generator-list/generator-list.component';
import { PlacementListComponent } from '../../components/placement-list/placement-list.component';
import { LinkComponent } from '../../components/link/link.component';
import { StoreService } from '../../services/store.service';

@Component({
  selector: 'app-settings-page',
  imports: [GeneratorListComponent, PlacementListComponent, LinkComponent],
  templateUrl: './settings-page.component.html',
  styleUrl: './settings-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SettingsPageComponent {
  protected store = inject(StoreService);
}

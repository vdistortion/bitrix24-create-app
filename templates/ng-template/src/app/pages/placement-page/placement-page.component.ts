import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LinkComponent } from '../../components/link/link.component';
import { PlacementStoreService } from '../../services/placement-store.service';
import { RootStoreService } from '../../services/root-store.service';

@Component({
  selector: 'app-placement-page',
  imports: [FormsModule, LinkComponent],
  templateUrl: './placement-page.component.html',
  styleUrl: './placement-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlacementPageComponent {
  constructor(
    private rootStoreService: RootStoreService,
    private placementStoreService: PlacementStoreService,
  ) {}

  get list(): IPlacement[] {
    return Object.values(this.placementStoreService.list);
  }

  get link() {
    return this.placementStoreService.link(
      this.rootStoreService.appInfoCode,
      this.rootStoreService.appInfoId,
    );
  }

  bind(item: { placement: string; name: string; bind: boolean }) {
    this.placementStoreService.bind(item);
  }

  unbind(placement: string) {
    this.placementStoreService.unbind(placement);
  }
}

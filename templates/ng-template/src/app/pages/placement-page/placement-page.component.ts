import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LinkComponent } from '../../components/link/link.component';
import { PlacementStoreService } from '../../services/placement-store.service';

@Component({
  selector: 'app-placement-page',
  standalone: true,
  imports: [FormsModule, LinkComponent],
  templateUrl: './placement-page.component.html',
  styleUrl: './placement-page.component.scss',
})
export class PlacementPageComponent {
  private placementStore: any;

  constructor(private placementStoreService: PlacementStoreService) {
    this.placementStore = this.placementStoreService;
  }

  get list() {
    return this.placementStore.list;
  }

  get link() {
    return this.placementStore.link('', '');
  }

  bind(item: { placement: string; name: string }) {
    this.placementStore.bind(item);
  }

  unbind(placement: string) {
    this.placementStore.unbind(placement);
  }
}

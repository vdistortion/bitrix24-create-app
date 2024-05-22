import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LinkComponent } from '../../components/link/link.component';
import {
  PlacementStoreService,
  IPlacement,
} from '../../services/placement-store.service';
import { RootStoreService } from '../../services/root-store.service';

@Component({
  selector: 'app-placement-page',
  standalone: true,
  imports: [FormsModule, LinkComponent],
  templateUrl: './placement-page.component.html',
  styleUrl: './placement-page.component.scss',
})
export class PlacementPageComponent {
  private placementStore: any;
  private readonly appInfoId: any;
  private readonly appInfoCode: any;

  constructor(
    private rootStoreService: RootStoreService,
    private placementStoreService: PlacementStoreService,
  ) {
    this.placementStore = this.placementStoreService;
    this.appInfoId = this.rootStoreService.appInfoId;
    this.appInfoCode = this.rootStoreService.appInfoCode;
  }

  get list(): IPlacement[] {
    return Object.values(this.placementStore.list);
  }

  get link() {
    return this.placementStore.link(this.appInfoCode, this.appInfoId);
  }

  bind(item: { placement: string; name: string; bind: boolean }) {
    this.placementStore.bind(item);
  }

  unbind(placement: string) {
    this.placementStore.unbind(placement);
  }
}

import { ChangeDetectorRef, ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LinkComponent } from '../link/link.component';
import { RootStoreService } from '../../services/root-store.service';

@Component({
  selector: 'app-placement-list',
  imports: [FormsModule, LinkComponent],
  templateUrl: './placement-list.component.html',
  styleUrl: './placement-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlacementListComponent {
  private cdr = inject(ChangeDetectorRef);
  protected store = inject(RootStoreService);

  get list(): IPlacement[] {
    return Object.values(this.store.placementList);
  }

  get link() {
    return this.store.appLink;
  }

  async bind(item: { placement: string; name: string; bind: boolean }) {
    await this.store.bind(item);
    this.cdr.markForCheck();
  }

  async unbind(placement: string) {
    await this.store.unbind(placement);
    this.cdr.markForCheck();
  }
}

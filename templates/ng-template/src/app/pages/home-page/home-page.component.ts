import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { LoaderComponent } from '../../ui/loader/loader.component';
import { UserListsComponent } from '../../components/user-lists/user-lists.component';
import { StoreService } from '../../services/store.service';

@Component({
  selector: 'app-home-page',
  imports: [AsyncPipe, LoaderComponent, UserListsComponent],
  templateUrl: './home-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent {
  protected store = inject(StoreService);
}

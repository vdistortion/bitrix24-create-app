import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { LoaderComponent } from '../../ui/loader/loader.component';
import { StoreService } from '../../services/store.service';
import { UserListsComponent } from '../../components/user-lists/user-lists.component';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-home-page',
  imports: [LoaderComponent, UserListsComponent, AsyncPipe],
  templateUrl: './home-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent {
  protected store = inject(StoreService);
}

import { Component } from '@angular/core';
import { LoaderComponent } from '../../ui/loader/loader.component';
import { RootStoreService } from '../../services/root-store.service';
import { UserListsComponent } from '../../components/user-lists/user-lists.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [LoaderComponent, UserListsComponent],
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {
  constructor(private rootStoreService: RootStoreService) {}

  get loader() {
    return this.rootStoreService.loader;
  }
}

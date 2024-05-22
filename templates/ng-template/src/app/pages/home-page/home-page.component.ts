import { Component, OnInit } from '@angular/core';
import { LoaderComponent } from '../../ui/loader/loader.component';
import { RootStoreService } from '../../services/root-store.service';
import {
  PlacementStoreService,
  IList,
} from '../../services/placement-store.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [LoaderComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent implements OnInit {
  protected loader: boolean;

  constructor(
    private rootStoreService: RootStoreService,
    private placementStoreService: PlacementStoreService,
  ) {
    this.loader = this.rootStoreService.loader;
  }

  ngOnInit(): void {
    this.rootStoreService.init().then((list: IList) => {
      this.placementStoreService.setList(list);
    });

    this.rootStoreService.appInfo().then(({ scope }: { scope: string[] }) => {
      this.verifyScopeLog(environment.SCOPE, scope);
    });
  }

  verifyScopeLog(scopeList: string[], requiredList: string[]) {
    [...scopeList, ...requiredList]
      .reduce((messages: string[], scope) => {
        if (!scopeList.includes(scope))
          messages.push(`scope "${scope}" excess`);
        if (!requiredList.includes(scope))
          messages.push(`scope "${scope}" not found`);
        return messages;
      }, [])
      .forEach((message: string) => {
        console.info('🔥', message);
      });
  }
}

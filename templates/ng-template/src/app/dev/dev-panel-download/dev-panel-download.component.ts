import { ChangeDetectionStrategy, Component } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'dev-panel-download',
  imports: [],
  templateUrl: './dev-panel-download.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DevPanelDownloadComponent {
  filename = `${environment.APP_NAME}.zip`;
}

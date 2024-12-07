import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormValidationComponent } from '../../components/form-validation/form-validation.component';

@Component({
  selector: 'app-example-page',
  imports: [FormValidationComponent],
  templateUrl: './example-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExamplePageComponent {}

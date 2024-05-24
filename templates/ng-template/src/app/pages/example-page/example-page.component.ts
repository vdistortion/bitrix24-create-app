import { Component } from '@angular/core';
import { FormValidationComponent } from '../../components/form-validation/form-validation.component';

@Component({
  selector: 'app-example-page',
  standalone: true,
  imports: [FormValidationComponent],
  templateUrl: './example-page.component.html',
})
export class ExamplePageComponent {}

import { Component } from '@angular/core';
import { FormValidationComponent } from '../../components/form-validation/form-validation.component';

@Component({
  selector: 'app-example-page',
  standalone: true,
  imports: [FormValidationComponent],
  templateUrl: './example-page.component.html',
  styleUrl: './example-page.component.scss',
})
export class ExamplePageComponent {}

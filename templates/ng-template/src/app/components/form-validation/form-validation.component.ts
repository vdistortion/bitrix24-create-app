import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-validation',
  imports: [ReactiveFormsModule],
  templateUrl: './form-validation.component.html',
  styleUrl: './form-validation.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormValidationComponent {
  form: FormGroup = new FormGroup({
    name: new FormControl(null, Validators.required),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
  });

  onSubmit() {
    console.log(this.form.value);
  }
}

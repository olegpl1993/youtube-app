import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export default class AdminComponent {
  public createCardForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.createCardForm = this.fb.group({
      title: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
        ],
      ],
      discription: ['', [Validators.maxLength(255)]],
      img: ['', [Validators.required]],
      linkVideo: ['', [Validators.required]],
      creationDate: ['', [Validators.required, this.futureDateValidator()]],
    });
  }

  futureDateValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const selectedDate = new Date(control.value);
      const currentDate = new Date();
      currentDate.setHours(23, 59, 59, 999);
      return selectedDate < currentDate ? null : { futureDate: true };
    };
  }

  onSubmit() {
    console.log(this.createCardForm);
  }
}

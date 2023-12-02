import { Component } from '@angular/core';
import {
  AbstractControl,
  FormArray,
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
      tags: [''],
      tagsArray: this.fb.array(
        [],
        [Validators.required, Validators.minLength(5), Validators.maxLength(5)]
      ),
    });
  }

  get tags() {
    return this.createCardForm.get('tags');
  }

  get tagsArray() {
    return this.createCardForm.get('tagsArray') as FormArray;
  }

  addTag(event: Event) {
    event.preventDefault();
    const tagValue = this.tags?.value.trim();

    if (tagValue !== '' && this.tagsArray?.length < 5) {
      this.tagsArray?.push(this.fb.control(tagValue));
      this.tags?.setValue('');

      if (this.tagsArray?.length === 5) {
        this.tags?.disable();
        this.createCardForm.get('submitButton')?.disable();
      }
    }
  }

  removeTag(index: number) {
    this.tagsArray?.removeAt(index);

    if (this.tagsArray?.length < 5) {
      this.tags?.enable();
    }
  }

  futureDateValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const selectedDate = new Date(control.value);
      const currentDate = new Date();
      currentDate.setHours(23, 59, 59, 999);
      return selectedDate < currentDate ? null : { futureDate: true };
    };
  }

  reset(event: Event) {
    event.preventDefault();
    this.createCardForm.reset();
    this.tagsArray?.clear();
    this.tags?.enable();
  }

  onSubmit() {
    console.log(this.createCardForm.value);
  }
}

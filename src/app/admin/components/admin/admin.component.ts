import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export default class AdminComponent {
  public createCardForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.createCardForm = this.fb.group({
      title: ['', [Validators.required]],
      discription: ['', [Validators.required]],
      img: ['', [Validators.required]],
      linkVideo: ['', [Validators.required]],
    });
  }

  onSubmit() {
    console.log(this.createCardForm.value);
  }
}

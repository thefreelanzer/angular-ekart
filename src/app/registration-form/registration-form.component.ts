import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-registration-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './registration-form.component.html',
  styleUrl: './registration-form.component.css',
})
export class RegistrationFormComponent {
  genders = [
    {
      id: 'check-male',
      value: 'male',
      display: 'Male',
    },
    {
      id: 'check-female',
      value: 'female',
      display: 'Female',
    },
    {
      id: 'check-other',
      value: 'other',
      display: 'Other',
    },
  ];
  @ViewChild('regform')
  formElements: NgForm;
  onSubmit() {
    console.log(this.formElements);
    console.log(this.formElements.value.first_name);
    console.log(this.formElements.value.address.city);

    // console.log(this.formElements.controls['first_name'].value);
  }
}

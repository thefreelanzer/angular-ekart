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

  first_name: string = '';
  last_name: string = '';
  dob: string;
  email: string;
  username: string;
  country: string;
  city: string;
  region: string;
  postal: string;
  submitted: boolean = false;
  IsAgreed: boolean = false;

  @ViewChild('regform')
  formElements: NgForm;
  onSubmit() {
    // console.log(this.formElements);
    // console.log(this.formElements.value.first_name);
    // console.log(this.formElements.value.address.city);
    this.country = this.formElements.value.address.country;
    this.city = this.formElements.value.address.city;
    this.region = this.formElements.value.address.region;
    this.postal = this.formElements.value.address.postal_code;

    this.submitted = true;
    // this.formElements.reset();
    // this.formElements.form.patchValue({
    //   gender: 'male',
    //   address: {
    //     country: 'India',
    //   },
    // });

    // console.log(this.formElements.controls['first_name'].value);
  }

  generateUsername() {
    let username = '';

    if (this.first_name.length >= 3) {
      username += this.first_name.slice(0, 3);
    } else {
      username += this.first_name;
    }

    if (this.last_name.length >= 3) {
      username += this.last_name.slice(0, 3);
    } else {
      username += this.last_name;
    }

    let birthdate = new Date(this.dob);
    username += birthdate.getFullYear();

    this.username = username.toLowerCase();
    // console.log(username);

    // this.formElements.setValue({
    //   first_name: this.formElements.value.first_name,
    //   last_name: this.formElements.value.last_name,
    //   email: this.formElements.value.email,
    //   phone: this.formElements.value.phone,
    //   dob: this.formElements.value.dob,
    //   gender: this.formElements.value.gender,
    //   uname: username,
    //   address: {
    //     address_line1: this.formElements.value.address.address_line1,
    //     address_line2: this.formElements.value.address.address_line2,
    //     country: this.formElements.value.address.country,
    //     city: this.formElements.value.address.city,
    //     region: this.formElements.value.address.region,
    //     postal_code: this.formElements.value.address.postal_code,
    //   },
    // });

    this.formElements.form.patchValue({
      uname: this.username,
    });
  }
}

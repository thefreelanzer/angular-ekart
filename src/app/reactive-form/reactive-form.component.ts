import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CustomValidators } from '../Validators/noSpaceallow.validator';
import {
  FormArray,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css',
})
export class ReactiveFormComponent {
  reactiveForm: FormGroup;
  formStatus: string = '';
  formdata: any = {};

  ngOnInit() {
    this.reactiveForm = new FormGroup({
      first_name: new FormControl(null, [
        Validators.required,
        CustomValidators.noSpaceAllow,
      ]),
      last_name: new FormControl(null),
      email: new FormControl(null, [Validators.required, Validators.email]),
      username: new FormControl(
        null,
        Validators.required,
        CustomValidators.checkUserName
      ),
      dob: new FormControl(null),
      gender: new FormControl(null),
      address: new FormGroup({
        street: new FormControl(null, Validators.required),
        country: new FormControl('India', Validators.required),
        city: new FormControl(null),
        region: new FormControl(null),
        postal: new FormControl(null, Validators.required),
      }),
      skills: new FormArray([new FormControl(null)]),
      experience: new FormArray([
        new FormGroup({
          company: new FormControl(),
          position: new FormControl(),
          totalExp: new FormControl(),
          start: new FormControl(),
          end: new FormControl(),
        }),
      ]),
    });

    // value changes in a field
    // this.reactiveForm.get('first_name').valueChanges.subscribe((val) => {
    //   console.log(val);
    // });

    //value changes in form group
    // this.reactiveForm.valueChanges.subscribe((data) => {
    //   console.log(data);
    // });

    // this.reactiveForm.get('email').statusChanges.subscribe((s) => {
    //   console.log(s);
    // });

    this.reactiveForm.statusChanges.subscribe((s) => {
      console.log(s);
      this.formStatus = s;
    });
  }

  onSubmit() {
    // console.log(this.reactiveForm);
    this.formdata = this.reactiveForm.value;

    this.reactiveForm.reset({
      first_name: null,
      last_name: null,
      email: null,
      username: null,
      dob: null,
      gender: 'male',
      address: {
        street: null,
        country: 'India',
        city: null,
        region: null,
        postal: null,
      },
      skills: [null],
      experience: [],
    });
  }

  addSkills() {
    (<FormArray>this.reactiveForm.get('skills')).push(new FormControl(null));
  }
  deleteSkills(i: number) {
    const controls = <FormArray>this.reactiveForm.get('skills');
    controls.removeAt(i);
  }

  addExperience() {
    const frmgroup = new FormGroup({
      company: new FormControl(null),
      position: new FormControl(null),
      totalExp: new FormControl(null),
      start: new FormControl(null),
      end: new FormControl(null),
    });

    (<FormArray>this.reactiveForm.get('experience')).push(frmgroup);
  }

  deleteExperience(index: number) {
    const frmArray = <FormArray>this.reactiveForm.get('experience');
    frmArray.removeAt(index);
  }

  generateUsername() {
    let username = '';
    const fName: string = this.reactiveForm.get('first_name').value;
    const lName: string = this.reactiveForm.get('last_name').value;
    const dob: string = this.reactiveForm.get('dob').value;

    if (fName.length >= 3) {
      username += fName.slice(0, 3);
    } else {
      username += fName;
    }

    if (lName.length >= 3) {
      username += lName.slice(0, 3);
    } else {
      username += lName;
    }

    let datetime = new Date(dob);
    username += datetime.getFullYear();

    username = username.toLowerCase();

    //console.log(username);

    // this.reactiveForm.setValue({
    //   first_name: this.reactiveForm.get('first_name').value,
    //   last_name: this.reactiveForm.get('last_name').value,
    //   email: this.reactiveForm.get('email').value,
    //   username: username,
    //   dob: this.reactiveForm.get('dob').value,
    //   gender: this.reactiveForm.get('gender').value,
    //   address: {
    //     street: this.reactiveForm.get('address.street').value,
    //     country: this.reactiveForm.get('address.country').value,
    //     city: this.reactiveForm.get('address.city').value,
    //     region: this.reactiveForm.get('address.region').value,
    //     postal: this.reactiveForm.get('address.postal').value,
    //   },
    //   skills: this.reactiveForm.get('skills').value,
    //   experience: this.reactiveForm.get('experience').value,
    // });

    //this.reactiveForm.get('username').setValue(username);

    this.reactiveForm.patchValue({
      username: username,
      address: {
        city: 'Delhi',
      },
    });
  }
}

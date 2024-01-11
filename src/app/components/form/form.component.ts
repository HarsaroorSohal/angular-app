import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators, FormArray } from '@angular/forms';
import { inject } from '@angular/core';
import { AddBackgroundColorDirective } from '../../directives/add-background-color.directive';

const roles = [
  { id: 1, role: 'admin' },
  { id: 2, role: 'not admin' }
];

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule, AddBackgroundColorDirective],
  templateUrl: './form.component.html',
  styles: `
    .address-container {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
    }
  `
})
export class FormComponent {
  private fb: FormBuilder;
  registerForm: FormGroup;
  roles: Iterable<Record<string, any>> = roles;
  constructor() {
    this.fb = inject(FormBuilder);
  }

  ngOnInit() {
    const address = this.fb.group({
      city: '',
      state: '',
      country: ''
    });
    const phones = this.fb.array(['', '', '']);
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      id: [roles.at(0), Validators.required],
      address,
      phones
    });
    this.registerForm.get('id').valueChanges.subscribe(val => {
      if (val.role === 'not admin') {
        this.getPhones.disable();
      }
    });
  }

  get getPhones() {
    return this.registerForm.get('phones') as FormArray;
  }

  get id() {
    const val = this.registerForm.get('id');
    console.log('this is called again', val);
    return val;
  }

  handleSubmit() {
    console.log(this.registerForm);
  }
}

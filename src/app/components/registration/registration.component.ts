import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  public form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
  ) {
  }

  ngOnInit(): void {
    this.registrationForm();
  }

  registrationForm(): void {
    this.form = this.formBuilder.group({
      name: [''],
      email: [''],
      password: [''],
    });
  }

  registration() {
    
  }
}

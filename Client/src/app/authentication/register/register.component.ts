import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm = new FormGroup ({
    name: new FormControl(),
    email: new FormControl(),
    password: new FormControl()
  });

  constructor(public auth: AuthService) { }

  ngOnInit() {
    this.auth.errorText = ''
  }

  register() {
    this.auth.registerUser(this.registerForm.value)
  } 

}

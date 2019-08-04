import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup ({
    email: new FormControl(),
    password: new FormControl()
  });

  constructor(public auth: AuthService) { }
  
  ngOnInit() {
    this.auth.errorText = ''
  }

  login() {
      this.auth.loginUser(this.loginForm.value)
  } 

}

import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import {FormControl, Validators} from '@angular/forms';

import { Observable } from 'rxjs/Observable';
import { retry } from 'rxjs/operator/retry';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-logIn',
  templateUrl: './logIn.component.html',
  styleUrls: ['./logIn.component.css']
})
export class LogInComponent implements OnInit {
  
  email = new FormControl('', [Validators.required, Validators.email]);
  pass = new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z0-9]+'),Validators.minLength(6)]);
  hide=true;

  constructor(private authService:AuthService ) {
    
  }

  ngOnInit() {
  }
    
  getEmailErrorMessage() {
    return this.email.hasError('required') ? 'Это поле не может быть пустым' :
        this.email.hasError('email') ? 'Ошибка ввода e-mail' :
            '';
  }
  getPassErrorMessage(){
    return this.pass.hasError('required') ?'Это поле не может быть пустым':
          this.pass.hasError('pattern') ?'Допускается только латиница':
          this.pass.hasError('minLength')?'Минимальная длинна пароля - 6 символов':'';
  }

  onSignUp(){
    this.authService.signup(this.email.value,this.pass.value)
  }
  onLogIn(){
    this.authService.login(this.email.value,this.pass.value)
  }
  



}

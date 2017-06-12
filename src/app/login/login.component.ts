import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';

import { Cookie } from 'ng2-cookies';
import { ToastrService } from 'ngx-toastr';

import { LoginService } from './service/login.service';

import { User } from './model/user';
import * as CryptoJS from '../../../node_modules/crypto-js';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private fb: FormBuilder, private lgService: LoginService, private router: Router, private toastrService: ToastrService) { }

  ngOnInit() {
    this.loginForm = this.toFormGroup();
  }

  private toFormGroup() {
    const formGroup = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });

    return formGroup;
  }

  onSubmit(formValue: User) {
    let encUser = this.encryptUser();
    this.checkUser(encUser);
  }

  encryptUser() {
    const key = CryptoJS.enc.Utf8.parse('8080808080808080');
    const iv = CryptoJS.enc.Utf8.parse('8080808080808080');
    const encryptedUser: User = {
    username: '',
    password: ''
    };

    encryptedUser.username = CryptoJS.AES.encrypt(this.loginForm.get('username').value, key, {iv: iv}).toString();
    encryptedUser.password = CryptoJS.AES.encrypt(this.loginForm.get('password').value, key, {iv: iv}).toString();
    return encryptedUser;
  }

  checkUser(user: User) {
    this.lgService.checkStatus(user)
    .subscribe(data => {
      this.setAuthStatus(data);
    }, error => {
      this.showLoginFailed();
      console.log(error);
    });
  }

  setAuthStatus(data: boolean) {
    if (data) {
      Cookie.set('user', this.loginForm.get('username').value, 45);
      this.router.navigate(['/home']);
    } else {
      this.showLoginFailed();
      console.log('Error logging in');
    }
  }

  showLoginFailed() {
    this.toastrService.error('Verify username nad password are correct', 'Login Error!');
  }
}

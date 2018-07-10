import { Inject, Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { LOCAL_STORAGE, WebStorageService } from 'angular-webstorage-service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private router: Router, @Inject(LOCAL_STORAGE) private storage: WebStorageService) { }

  public profile = {
    name: '',
    email: '',
    password: '',
    status: false,
    style: 'Not found yet'
  };
  checkPass: '';
  invalid = false;
  ngOnInit() {
    $('html,body').animate({ scrollTop: '0px' }, 'slow');
    this.profile.name = '';
    this.profile.email = '';
    this.profile.password = '';
    this.checkPass = '';
    this.profile.status = true;
  }

  signUp() {
    console.log(this.profile, this.checkPass);
    if (this.profile.password && this.profile.password !== this.checkPass) {
      this.invalid = true;
    } else {
      this.storage.set('user', this.profile);
      this.router.navigateByUrl('/profile');
    }
  }


}

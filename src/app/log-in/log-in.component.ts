import { Inject, Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { LOCAL_STORAGE, WebStorageService } from 'angular-webstorage-service';
import { Router } from '@angular/router';
import { SampleData } from '../sample-data';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  constructor(private api: ApiService, private data: SampleData, private router: Router, @Inject(LOCAL_STORAGE) private storage: WebStorageService) { }

  public profile = {
    email: '',
    password: ''
  };
  invalid = false;
  userData: any;
  error: any;
  ngOnInit() {
    $('html,body').animate({ scrollTop: '0px' }, 'slow');
    // this.userData = this.storage.get('user');
    // console.log('session data', this.storage.get('user'));
  }

  logIn() {
    if (this.profile.email === '' || this.profile.password === '') {
      this.invalid = true;
      return;
    }
    // console.log('data: ', this.userData);
    // if (this.userData.email === this.profile.email && this.userData.password === this.profile.password) {
      this.api.loginUser(this.profile).subscribe((res: any) => {
        if (res.success) {
          this.storage.set('user', res);
          // alert('helo');
          this.data.getLoggedIn.emit(true);
          this.router.navigateByUrl('/profile');
        } else {
          this.error = res.msg;
          // this.invalid = true;
        }
      });
      // this.router.navigateByUrl('/profile');
      // window.location.routerLink = '/profile';
    // } else {
    // }
  }
}

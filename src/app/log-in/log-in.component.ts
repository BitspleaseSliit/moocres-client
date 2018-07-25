import { Inject, Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { LOCAL_STORAGE, WebStorageService } from 'angular-webstorage-service';
import { Router } from '@angular/router';
import { SampleData } from '../sample-data';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  constructor(private data: SampleData, private router: Router, @Inject(LOCAL_STORAGE) private storage: WebStorageService) { }

  public profile = {
    email: '',
    password: ''
  };
  invalid = false;
  userData: any;
  ngOnInit() {
    $('html,body').animate({ scrollTop: '0px' }, 'slow');
    this.userData = this.storage.get('user');
    console.log('session data', this.storage.get('user'));
  }

  logIn() {
    if (this.profile.email === '' || this.profile.password === '') {
      this.invalid = true;
      return;
    }
    if (this.userData.email === this.profile.email && this.userData.password === this.profile.password) {
      this.userData.status = true;
      this.storage.set('user', this.userData);
      // this.router.navigateByUrl('/profile');
      // window.location.routerLink = '/profile';
      this.data.getLoggedIn.emit(true);
      this.router.navigateByUrl('/profile');
    } else {
      this.invalid = true;
    }
  }
}

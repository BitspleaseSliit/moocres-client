import { Inject, Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { LOCAL_STORAGE, WebStorageService } from 'angular-webstorage-service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private router: Router, @Inject(LOCAL_STORAGE) private storage: WebStorageService) { }
  authTrue = false;
  ngOnInit() {
    console.log('userprofile', this.storage.get('user'));
    $('html,body').animate({ scrollTop: '0px' }, 'slow');
    if (this.storage.get('user') !== null) {
      if (this.storage.get('user').status === true) {
        this.authTrue = true;
      } else {
        this.router.navigateByUrl('/signup');
      }
    } else {
      this.router.navigateByUrl('/signup');
    }
  }

}

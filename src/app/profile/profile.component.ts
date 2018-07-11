import { Inject, Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { LOCAL_STORAGE, WebStorageService } from 'angular-webstorage-service';
import { Router } from '@angular/router';
import { SampleData } from '../sample-data';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private data: SampleData, private router: Router, @Inject(LOCAL_STORAGE) private storage: WebStorageService) { }
  authTrue = false;
  public user: any;
  public courses: any;
  ngOnInit() {
    console.log('userprofile', this.storage.get('user'));
    $('html,body').animate({ scrollTop: '0px' }, 'slow');
    this.courses = this.data.courseData;
    console.log(this.data.courseData);
    this.user = this.storage.get('user');
    if (this.user !== null) {
      if (this.user.status === true) {
        this.authTrue = true;
      } else {
        this.router.navigateByUrl('/signup');
      }
    } else {
      this.router.navigateByUrl('/signup');
    }
  }

  newTab(url) {
    console.log(url);
    window.open(url, '_blank');
  }

}

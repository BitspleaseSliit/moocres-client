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

  scoreArr: any;
  constructor(private data: SampleData, private router: Router, @Inject(LOCAL_STORAGE) private storage: WebStorageService) { }
  authTrue = false;
  public user: any;
  public courses = [];
  public temp: any;
  private style: any;
  private score: any;
  ngOnInit() {

    if (!this.storage.get('user')) {
      this.router.navigateByUrl('/signup');
    }
    console.log('userprofile', this.storage.get('user'));
    $('html,body').animate({ scrollTop: '0px' }, 'slow');
    this.temp = this.data.courseData;
    console.log(this.data.courseData);
    this.user = this.storage.get('user');
    this.style = this.user.style;
    console.log('style', this.style.split('/'));
    if (this.user !== null) {
      if (this.user.status === true) {
        this.authTrue = true;
      } else {
        this.router.navigateByUrl('/signup');
      }
    } else {
      this.router.navigateByUrl('/signup');
    }

    if (this.user.style) {
      this.mapUser();
    }



  }

  newTab(url) {
    console.log(url);
    window.open(url, '_blank');
  }

  mapUser() {
    let aCount = 0;
    let bCount = 0;

    this.score = this.user.score;
    this.scoreArr = this.score.split('/');

    console.log('Score', this.scoreArr[0].split('b'));

    this.scoreArr.forEach(element => {
      console.log(element.split('a').length);
      if (element.split('a').length > 1) {
        aCount++;
      } else {
        bCount++;
      }
    });

    if (aCount > bCount) {

      this.temp.forEach(course => {
        console.log(course.videoStyle.talkingHead);
        console.log(course.videoStyle.slide);
        console.log(course.videoStyle.conversations);
        console.log(course.videoStyle.code);

        if (course.videoStyle.talkingHead > course.videoStyle.slide) {
          this.courses.push(course);
        }

      });

    } else {

      this.temp.forEach(course => {
        console.log(course.videoStyle.talkingHead);
        console.log(course.videoStyle.slide);
        console.log(course.videoStyle.conversations);
        console.log(course.videoStyle.code);

        if (course.videoStyle.talkingHead < course.videoStyle.slide) {
          this.courses.push(course);
        }

      });
      console.log('slide');
    }

  }

}

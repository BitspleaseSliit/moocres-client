import { Inject, Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { LOCAL_STORAGE, WebStorageService } from 'angular-webstorage-service';
import { Router } from '@angular/router';
import { SampleData } from '../sample-data';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  scoreArr: any;
  constructor(private api: ApiService, private data: SampleData, private router: Router, @Inject(LOCAL_STORAGE) private storage: WebStorageService) { }
  authTrue = false;
  userID: any;
  public user = {
    name: '',
    score: ''
  };
  public courses = [];
  tempCourses: any;
  public temp: any;
  private learningStyles: {};
  private score: any;
  public style: any;
  public keyValue = 'hello';
  profileUrl = 'assets/profile/default.jpg';
  filtered: any;
  filtered_secod: any;
  searchQ = '';
  topicQ = '';
  apiData: any;

  ngOnInit() {
    this.style = '';
    if (this.storage.get('jwt')) {
      this.api.getUser().subscribe((res: any) => {
        this.api.getUserById(res._id).subscribe((data: any) => {
          console.log('got data: ', data);
          this.user = data;
          this.userID = data._id;
          if (data.profilePic) {
            this.profileUrl = data.profilePic;
          }
          if (data.learningStyles) {
            this.api.getCoursesByUserId(res._id).subscribe(courses => {
              console.log(courses);
              this.courses = this.tempCourses = this.apiData = courses;
            });
            if (data.learningStyles.active === 1) {
              this.style += 'Active/';
            } else {
              this.style += 'Reflective/';
            }
            if (data.learningStyles.sensing === 1) {
              this.style += 'Sensing/';
            } else {
              this.style += 'Intuitive/';
            }
            if (data.learningStyles.visual === 1) {
              this.style += 'Visual/';
            } else {
              this.style += 'Verbal/';
            }
            if (data.learningStyles.sequential === 1) {
              this.style += 'Sequential';
            } else {
              this.style += 'Global';
            }
            // alert(this.style);

          } else {
            this.style = 'Not found yet';
          }
        });
      });
    } else {
      this.router.navigateByUrl('/login');
    }
    // console.log("this.storage.get('user').status", this.storage.get('user').status);
    // if (!this.storage.get('user').status) {
    // }
    // console.log('userprofile', this.storage.get('user'));
    // $('html,body').animate({ scrollTop: '0px' }, 'slow');
    // this.temp = this.data.courseData;
    // console.log(this.data.courseData);
    // this.user = this.storage.get('user');
    // this.learningStyles = this.user.learningStyles;
    // // console.log('style', this.style.split('/'));
    // if (this.user !== null) {
    //   if (this.user.status === true) {
    //     this.authTrue = true;
    //   } else {
    //     this.router.navigateByUrl('/signup');
    //   }
    // } else {
    //   this.router.navigateByUrl('/signup');
    // }

    // if (this.user.style) {
    //   this.mapUser();
    // }



  }

  newTab(url) {
    console.log(url);
    window.open(url, '_blank');
  }


  // searchRec() {
  //   console.log('hello', this.keyValue);
  //   this.courses = this.tempCourses.filter(res => res.name === this.keyValue);
  //   console.log(this.courses);
  // }


  searchCourse() {
    this.courses = this.apiData.filter(item => item.name.toUpperCase().indexOf(this.searchQ.toUpperCase()) !== -1);
    this.filtered = this.courses;
  }
  searchTopic() {
    this.searchCourse();
    // this.courses = this.filtered.filter(item => {
    //   item.forEach(topic => {
    //     if (topic.toUpperCase() === this.topicQ.toUpperCase()) {
    //       return true;
    //     }
    //   });
    // });
    this.courses = this.filtered.filter(item => item.name.toUpperCase().indexOf(this.topicQ.toUpperCase()) !== -1);
    this.filtered_secod = this.courses;
  }
  accentChange(value) {
    this.searchTopic();
    console.log('filtered', this.filtered_secod);
    // this.courses = this.filtered_secod.filter(item => item.courseAccent === value);
    this.courses = this.filtered_secod.filter(item => item.logo.toUpperCase().indexOf(value.toUpperCase()) !== -1);
    console.log('accent', this.courses);
  }

  complexityChange(value) {
    alert(value);
  }


  changePhoto() {
    const url = prompt('Please enter photo URL');
    if (url == null || url === '') {
      alert('You have to give a url');
    } else {
      alert(url);
    }
    const postData = {
      profilePic: url,
    };
    console.log(postData);

    this.api.updateUser(this.userID, postData).subscribe(res => {
      console.log(res);
    });
    // alert(this.userID);

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

        if (course.videoStyle.talkingHead > course.videoStyle.code) {
          this.courses.push(course);
        }

      });

    } else {

      this.temp.forEach(course => {
        console.log(course.videoStyle.talkingHead);
        console.log(course.videoStyle.slide);
        console.log(course.videoStyle.conversations);
        console.log(course.videoStyle.code);

        if (course.videoStyle.talkingHead < course.videoStyle.code) {
          this.courses.push(course);
        }

      });
      console.log('code');
    }

  }

}

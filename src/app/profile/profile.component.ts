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
  topicFiltered: any[];
  accentFiltered: any[];
  complexityFiltered: any[];
  platformFiltered: any[];
  constructor(
    private api: ApiService,
    private data: SampleData,
    private router: Router,
    @Inject(LOCAL_STORAGE) private storage: WebStorageService
  ) { }
  authTrue = false;
  userID: any;
  public user = {
    name: '',
    score: ''
  };

  allCourses = [];
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

  accentValue: any;
  platformValue: any;
  complexityValue: any;

  ngOnInit() {
    this.style = '';
    if (this.storage.get('jwt')) {
      this.api.getUser().subscribe((res: any) => {
        this.api.getUserById(res._id).subscribe((data: any) => {
          console.log('got data: ', data);
          this.user = data;
          this.userID = data._id;
          this.storage.set('loggedUser', data);
          if (data.profilePic) {
            this.profileUrl = data.profilePic;
          }
          if (data.learningStyles) {
            this.api.getCoursesByUserId(res._id).subscribe(courses => {
              console.log(courses);
              this.courses = this.tempCourses = this.apiData = this.allCourses = courses;
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

    // tslint:disable-next-line:max-line-length
    // this.courses = this.filtered.filter(item => item.abstractTopics.filter(topic => topic.toUpperCase().indexOf(this.topicQ.toUpperCase()) !== -1)); 
    this.courses = [];
    this.filtered.forEach(element => {
      element.abstractTopics.forEach(topic => {

        const input = this.topicQ.toLowerCase();

        const re = new RegExp(input);


        console.log('expression: ', re);

        const str = topic;
        console.log('string :', str);
        if (str.search(re) === -1) {
          console.log('Does not contain ', input);
        } else {
          this.courses.push(element);
          this.topicFiltered = this.courses;
          console.log(element);
        }

      });
    });
    // this.filtered_secod = this.courses;
  }
  accentChange(value) {
    // this.searchTopic();
    this.searchTopic();
    this.complexityValue = 0;
    this.platformValue = 0;
    if (Number(value) === -1) {
      this.courses = this.topicFiltered;
      return;
    }
    console.log('filtered', this.courses);
    // this.courses = this.filtered_secod.filter(item => item.courseAccent === value);
    this.courses = this.topicFiltered.filter(item => item.courseAccent === Number(value));
    console.log('accent', this.courses);
    this.accentFiltered = this.courses;
  }

  complexityChange(value) {
    this.searchTopic();
    this.accentValue = -1;
    this.platformValue = 0;
    if (Number(value) === 0) {
      this.courses = this.topicFiltered;
      return;
    }
    this.courses = this.topicFiltered.filter(item => item.linguisticComplexity === Number(value));
    // alert(value);
    console.log('complex: ', value);
    // this.complexityFiltered = this.courses;
  }

  platformChange(value) {
    this.searchTopic();
    this.accentValue = -1;
    this.complexityValue = 0;
    // this.complexityChange(this.complexityValue);
    if (Number(value) === 0) {
      this.courses = this.topicFiltered;
      return;
    }
    if (Number(value) === 1) {

      this.courses = this.topicFiltered.filter(item => item.logo.toUpperCase().indexOf('coursera'.toUpperCase()) !== -1);
    } else if (Number(value) === 2) {

      this.courses = this.topicFiltered.filter(item => item.logo.toUpperCase().indexOf('edx'.toUpperCase()) !== -1);
    } else if (Number(value) === 3) {

      this.courses = this.topicFiltered.filter(item => item.logo.toUpperCase().indexOf('futureLearn'.toUpperCase()) !== -1);
    }

    // this.platformFiltered = this.courses;



  }

  changePhoto() {
    const url = prompt('Please enter photo URL');
    if (url == null || url === '') {
      alert('You have to give a url');
    } else {
      // alert(url);
      const body = {
        profilePic: url,
      };
      console.log(body);

      this.api.updateUser(this.userID, body).subscribe(res => {
        console.log('updated url response: ', res);
        this.ngOnInit();
      });
    }
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

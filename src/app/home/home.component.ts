import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  courses = [];
  i_value = 0;
  y_value = 0;
  x_value = 0;
  constructor(
    private api: ApiService
  ) { }


  ngOnInit() {
    $('html,body').animate({ scrollTop: '0px' }, 'slow');
    this.api.getCourses().subscribe(res => {
      console.log('resopose: ', res);
      this.courses = res;
      console.log('courses: ', this.courses);
      // this.courses = this.getPopular();
    });
  }

  newTab(url) {
    console.log(url);
    window.open(url, '_blank');
  }

  getPopular() {
    console.log('popular: ', this.courses);
    const popular = [];
    this.i_value = 0;
    const arr1 = this.courses;
    const arr2 = this.courses;
    const arr3 = this.courses;
    arr1.forEach(coursera => {
      if (this.i_value < 3) {
        console.log('this.i_value value: ', this.i_value);
        this.i_value++;
        if (coursera.logo === 'coursera') {
          console.log('coursera: ', coursera);

          popular.push(coursera);
        }
      }
    });
    this.x_value = 0;
    arr2.forEach(futureLearn => {
      if (this.x_value < 3) {
        console.log('this.x_value value: ', this.x_value);
        this.x_value++;
        if (futureLearn.logo === 'futureLearn') {
          console.log('futureLearn: ', futureLearn);
          popular.push(futureLearn);
        }
      }
    });
    this.y_value = 0;
    arr3.forEach(edx => {
      if (this.y_value < 3) {
        console.log('this.y_value value: ', this.y_value);
        this.y_value++;
        if (edx.logo === 'edx') {
          console.log('edx : ', edx);

          popular.push(edx);
        }
      }
    });
    return popular;
  }

}

import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { SampleData } from '../sample-data';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-bestcourses',
  templateUrl: './bestcourses.component.html',
  styleUrls: ['./bestcourses.component.css']
})
export class BestcoursesComponent implements OnInit {

  constructor(private data: SampleData, private api: ApiService) { }
  public courses: any;
  filtered: any;
  filtered_secod: any;
  searchQ = '';
  topicQ = '';

  ngOnInit() {
    $('html,body').animate({ scrollTop: '0px' }, 'slow');
    this.courses = this.data.courseData;
    this.filtered = this.courses;
    console.log(this.data.courseData);
    this.api.getCourses().subscribe((res) => {
      console.log(res);
    });

  }

  newTab(url) {
    console.log(url);
    window.open(url, '_blank');
  }
  searchCourse() {
    console.log('hello');
    this.courses = this.data.courseData.filter(item => item.courseName.toUpperCase().indexOf(this.searchQ.toUpperCase()) !== -1);
    this.filtered = this.courses;
  }
  searchTopic() {
    console.log('hello');
    this.courses = this.filtered.filter(item => item.courseName.toUpperCase().indexOf(this.topicQ.toUpperCase()) !== -1);
    this.filtered_secod = this.courses;
  }
  accentChange(value) {
    this.courses = this.filtered_secod.filter(item => item.logo.toUpperCase().indexOf(value.toUpperCase()) !== -1);
    console.log('hello', value);
  }
}

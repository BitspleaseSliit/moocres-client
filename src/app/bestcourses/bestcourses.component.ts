import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { SampleData } from '../sample-data';
import { ApiService } from '../api.service';
import { forEach } from '@angular/router/src/utils/collection';

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
  apiData: any;

  ngOnInit() {
    $('html,body').animate({ scrollTop: '0px' }, 'slow');
    this.api.getCourses().subscribe((res) => {
      this.courses = this.filtered = this.apiData = res;
      console.log('res: ', res);
    });

  }

  newTab(url) {
    console.log(url);
    window.open(url, '_blank');
  }
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
}

import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { SampleData } from '../sample-data';

@Component({
  selector: 'app-bestcourses',
  templateUrl: './bestcourses.component.html',
  styleUrls: ['./bestcourses.component.css']
})
export class BestcoursesComponent implements OnInit {

  constructor(private data: SampleData) { }
  public courses: any;

  ngOnInit() {
    $('html,body').animate({ scrollTop: '0px' }, 'slow');
    this.courses = this.data.courseData;
    console.log(this.data.courseData);
  }

  newTab(url) {
    console.log(url);
    window.open(url, '_blank');
  }
}

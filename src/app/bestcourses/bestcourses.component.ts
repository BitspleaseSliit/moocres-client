import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-bestcourses',
  templateUrl: './bestcourses.component.html',
  styleUrls: ['./bestcourses.component.css']
})
export class BestcoursesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('html,body').animate({ scrollTop: '0px' }, 'slow');
  }

}

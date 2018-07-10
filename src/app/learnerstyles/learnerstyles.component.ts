import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-learnerstyles',
  templateUrl: './learnerstyles.component.html',
  styleUrls: ['./learnerstyles.component.css']
})
export class LearnerstylesComponent implements OnInit {

  // tslint:disable-next-line:max-line-length
  answers: string[] = new Array();
  // tslint:disable-next-line:max-line-length
  // answers: string[] = ['a', 'b', 'a', 'b', 'a', 'a', 'b', 'a', 'b', 'a', 'a', 'b', 'a', 'b', 'a', 'a', 'b', 'a', 'b', 'a', 'a', 'b', 'a', 'b', 'a', 'a', 'b', 'a', 'b', 'a', 'a', 'b', 'a', 'b', 'a', 'a', 'b', 'a', 'b', 'a', 'a', 'b', 'a', 'b'];
  ActivistA: number;
  ActivistB: number;
  SensingA: number;
  SensingB: number;
  VisualA: number;
  VisualB: number;
  SequentialA: number;
  SequentialB: number;
  activistOrReflector = '';
  sensingOrIntuitive = '';
  visualOrVerbal = '';
  sequentialOrGlobal = '';
  dim1 = '';
  dim2 = '';
  dim3 = '';
  dim4 = '';

  pageNumber = 0;
  check = false;
  constructor() { }

  ngOnInit() {
    $('html,body').animate({ scrollTop: '0px' }, 'slow');

  }

  private calculateing() {
    this.ActivistA = 0;
    this.ActivistB = 0;
    this.SensingA = 0;
    this.SensingB = 0;
    this.VisualA = 0;
    this.VisualB = 0;
    this.SequentialA = 0;
    this.SequentialB = 0;

    for (let i = 0; i < this.answers.length; i += 4) {
      if (this.answers[i] === 'a') {
        this.ActivistA = this.ActivistA + 1;
      } else {
        this.ActivistB = this.ActivistB + 1;
      }
    }

    if (this.ActivistA > this.ActivistB) {
      this.activistOrReflector = (this.ActivistA - this.ActivistB) + 'a';
      this.dim1 = 'Active';
    } else {
      this.activistOrReflector = (this.ActivistB - this.ActivistA) + 'b';
      this.dim1 = 'Reflective';
    }

    for (let i = 1; i < this.answers.length; i += 4) {
      if (this.answers[i] === 'a') {
        this.SensingA = this.SensingA + 1;
      } else {
        this.SensingB = this.SensingB + 1;
      }
    }

    if (this.SensingA > this.SensingB) {
      this.visualOrVerbal = (this.SensingA - this.SensingB) + 'a';
      this.dim2 = 'Sensing';
    } else {
      this.visualOrVerbal = (this.SensingB - this.SensingA) + 'b';
      this.dim2 = 'Intuitive';
    }

    for (let i = 2; i < this.answers.length; i += 4) {
      if (this.answers[i] === 'a') {
        this.VisualA = this.VisualA + 1;
      } else {
        this.VisualB = this.VisualB + 1;
      }
    }

    if (this.VisualA > this.VisualB) {
      this.sensingOrIntuitive = (this.VisualA - this.VisualB) + 'a';
      this.dim3 = 'Visual';
    } else {
      this.sensingOrIntuitive = (this.VisualB - this.VisualA) + 'b';
      this.dim3 = 'Verbal';
    }

    for (let i = 3; i < this.answers.length; i += 4) {
      if (this.answers[i] === 'a') {
        this.SequentialA = this.SequentialA + 1;
      } else {
        this.SequentialB = this.SequentialB + 1;
      }
    }// sequentialOrGlobal

    if (this.SequentialA > this.SequentialB) {
      this.sequentialOrGlobal = (this.SequentialA - this.SequentialB) + 'a';
      this.dim4 = 'Sequential';
    } else {
      this.sequentialOrGlobal = (this.SequentialB - this.SequentialA) + 'b';
      this.dim4 = 'Global';
    }
  }


  checkScore() {
    this.calculateing();
    this.check = true;

    console.log(this.dim1);
    console.log(this.dim2);
    console.log(this.dim3);
    console.log(this.dim4);

  }


  navigate(val) {

    $('html,body').animate({ scrollTop: '0px' }, 'slow');
    if (val === 1) {
      this.pageNumber++;
      console.log('ANSER', this.answers[0]);
    } else {
      this.pageNumber--;
    }
  }


  toggle_info(id) {

    const p = document.getElementById('info-panel-' + id);
    const l = document.getElementById('info-btn-' + id);
    l.classList.toggle('doc-link-active');
    if (p.style.maxHeight) {
      p.style.maxHeight = null;
    } else {
      p.style.maxHeight = p.scrollHeight + 'px';
    }
  }

}

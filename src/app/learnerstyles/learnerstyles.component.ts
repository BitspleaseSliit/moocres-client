import { Inject, Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { LOCAL_STORAGE, WebStorageService } from 'angular-webstorage-service';

@Component({
  selector: 'app-learnerstyles',
  templateUrl: './learnerstyles.component.html',
  styleUrls: ['./learnerstyles.component.css']
})
export class LearnerstylesComponent implements OnInit {

  styleScore: string;
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

  learingStyle: any;

  pageNumber = 0;
  check = false;
  constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService) { }

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
    const profile = {
      name: '',
      email: '',
      password: '',
      status: false,
      learningStyles: {}
    };

    const learningStyles = {
      active: 0,
      reflective: 0,
      sensing: 0,
      intuitive: 0,
      visual: 0,
      verbal: 0,
      sequential: 0,
      global: 0
    };

    this.calculateing();
    this.check = true;
    this.learingStyle = this.dim1 + '/' + this.dim2 + '/' + this.dim3 + '/' + this.dim4;
    if (this.dim1 === 'Active') {
      learningStyles.active = 1;
    } else {
      learningStyles.reflective = 1;
    }
    if (this.dim1 === 'Sensing') {
      learningStyles.sensing = 1;

    } else {
      learningStyles.intuitive = 1;

    }
    if (this.dim1 === 'Visual') {
      learningStyles.visual = 1;

    } else {
      learningStyles.verbal = 1;

    }
    if (this.dim1 === 'Sequential') {
      learningStyles.sequential = 1;

    } else {
      learningStyles.global = 1;

    }
    profile.learningStyles = learningStyles;
    this.styleScore = this.activistOrReflector + '/' + this.visualOrVerbal + '/' + this.sensingOrIntuitive + '/' + this.sequentialOrGlobal;
    this.storage.set('user', profile);
    const user = this.storage.get('user');
    user.learningStyles = learningStyles;
    user.score = this.styleScore;
    this.storage.set('user', user);
    console.log(this.sequentialOrGlobal);
    console.log(this.sensingOrIntuitive);
    console.log(this.visualOrVerbal);
    console.log(this.activistOrReflector);
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

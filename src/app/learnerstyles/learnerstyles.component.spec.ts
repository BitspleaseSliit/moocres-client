import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnerstylesComponent } from './learnerstyles.component';

describe('LearnerstylesComponent', () => {
  let component: LearnerstylesComponent;
  let fixture: ComponentFixture<LearnerstylesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearnerstylesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnerstylesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BestcoursesComponent } from './bestcourses.component';

describe('BestcoursesComponent', () => {
  let component: BestcoursesComponent;
  let fixture: ComponentFixture<BestcoursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BestcoursesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BestcoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

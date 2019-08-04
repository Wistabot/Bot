import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetunansweredquestionsComponent } from './getunansweredquestions.component';

describe('GetunansweredquestionsComponent', () => {
  let component: GetunansweredquestionsComponent;
  let fixture: ComponentFixture<GetunansweredquestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetunansweredquestionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetunansweredquestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

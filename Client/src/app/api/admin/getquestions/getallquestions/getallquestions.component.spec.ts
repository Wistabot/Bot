import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetallquestionsComponent } from './getallquestions.component';

describe('GetallquestionsComponent', () => {
  let component: GetallquestionsComponent;
  let fixture: ComponentFixture<GetallquestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetallquestionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetallquestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

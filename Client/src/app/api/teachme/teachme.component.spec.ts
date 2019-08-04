import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachmeComponent } from './teachme.component';

describe('TeachmeComponent', () => {
  let component: TeachmeComponent;
  let fixture: ComponentFixture<TeachmeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeachmeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeachmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

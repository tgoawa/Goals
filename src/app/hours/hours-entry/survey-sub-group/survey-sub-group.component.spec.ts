import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveySubGroupComponent } from './survey-sub-group.component';

describe('SurveySubGroupComponent', () => {
  let component: SurveySubGroupComponent;
  let fixture: ComponentFixture<SurveySubGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurveySubGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveySubGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

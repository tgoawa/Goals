import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditIndustryGoalComponent } from './edit-industry-goal.component';

describe('EditIndustryGoalComponent', () => {
  let component: EditIndustryGoalComponent;
  let fixture: ComponentFixture<EditIndustryGoalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditIndustryGoalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditIndustryGoalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddIndustryGoalComponent } from './add-industry-goal.component';

describe('AddIndustryGoalComponent', () => {
  let component: AddIndustryGoalComponent;
  let fixture: ComponentFixture<AddIndustryGoalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddIndustryGoalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddIndustryGoalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

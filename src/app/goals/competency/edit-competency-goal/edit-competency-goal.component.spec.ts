import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCompetencyGoalComponent } from './edit-competency-goal.component';

describe('EditCompetencyGoalComponent', () => {
  let component: EditCompetencyGoalComponent;
  let fixture: ComponentFixture<EditCompetencyGoalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditCompetencyGoalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCompetencyGoalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPersonalGoalComponent } from './edit-personal-goal.component';

describe('EditCompetencyGoalComponent', () => {
  let component: EditPersonalGoalComponent;
  let fixture: ComponentFixture<EditPersonalGoalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPersonalGoalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPersonalGoalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

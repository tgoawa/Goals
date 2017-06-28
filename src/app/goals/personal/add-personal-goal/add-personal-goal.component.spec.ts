import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPersonalGoalComponent } from './add-personal-goal.component';

describe('AddCompetencyGoalComponent', () => {
  let component: AddPersonalGoalComponent;
  let fixture: ComponentFixture<AddPersonalGoalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPersonalGoalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPersonalGoalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

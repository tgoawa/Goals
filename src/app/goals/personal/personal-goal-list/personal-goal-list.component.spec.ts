import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalGoalListComponent } from './personal-goal-list.component';

describe('CompetencyGoalListComponent', () => {
  let component: PersonalGoalListComponent;
  let fixture: ComponentFixture<PersonalGoalListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalGoalListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalGoalListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetencyGoalListComponent } from './competency-goal-list.component';

describe('CompetencyGoalListComponent', () => {
  let component: CompetencyGoalListComponent;
  let fixture: ComponentFixture<CompetencyGoalListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompetencyGoalListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetencyGoalListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

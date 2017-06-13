import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndustryTeamGoalListComponent } from './industry-team-goal-list.component';

describe('IndustryTeamGoalListComponent', () => {
  let component: IndustryTeamGoalListComponent;
  let fixture: ComponentFixture<IndustryTeamGoalListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndustryTeamGoalListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndustryTeamGoalListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

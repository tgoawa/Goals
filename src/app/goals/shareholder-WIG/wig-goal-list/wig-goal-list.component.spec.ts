import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WigGoalListComponent } from './wig-goal-list.component';

describe('WigGoalListComponent', () => {
  let component: WigGoalListComponent;
  let fixture: ComponentFixture<WigGoalListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WigGoalListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WigGoalListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

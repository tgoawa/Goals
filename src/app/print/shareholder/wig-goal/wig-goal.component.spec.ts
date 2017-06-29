import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WigGoalComponent } from './wig-goal.component';

describe('WigGoalComponent', () => {
  let component: WigGoalComponent;
  let fixture: ComponentFixture<WigGoalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WigGoalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WigGoalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

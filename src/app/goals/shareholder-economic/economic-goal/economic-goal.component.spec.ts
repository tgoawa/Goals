import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EconomicGoalComponent } from './economic-goal.component';

describe('EconomicGoalComponent', () => {
  let component: EconomicGoalComponent;
  let fixture: ComponentFixture<EconomicGoalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EconomicGoalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EconomicGoalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

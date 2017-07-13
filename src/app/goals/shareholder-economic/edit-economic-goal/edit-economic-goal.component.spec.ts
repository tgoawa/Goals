import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEconomicGoalComponent } from './edit-economic-goal.component';

describe('EditEconomicGoalComponent', () => {
  let component: EditEconomicGoalComponent;
  let fixture: ComponentFixture<EditEconomicGoalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditEconomicGoalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditEconomicGoalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

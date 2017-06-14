import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWigGoalComponent } from './add-wig-goal.component';

describe('AddWigGoalComponent', () => {
  let component: AddWigGoalComponent;
  let fixture: ComponentFixture<AddWigGoalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddWigGoalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddWigGoalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

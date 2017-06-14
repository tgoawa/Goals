import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditWigGoalComponent } from './edit-wig-goal.component';

describe('EditWigGoalComponent', () => {
  let component: EditWigGoalComponent;
  let fixture: ComponentFixture<EditWigGoalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditWigGoalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditWigGoalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

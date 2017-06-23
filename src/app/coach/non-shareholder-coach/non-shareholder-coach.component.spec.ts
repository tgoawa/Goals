import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NonShareholderCoachComponent } from './non-shareholder-coach.component';

describe('NonShareholderCoachComponent', () => {
  let component: NonShareholderCoachComponent;
  let fixture: ComponentFixture<NonShareholderCoachComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NonShareholderCoachComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NonShareholderCoachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NonChargeTimeComponent } from './non-charge-time.component';

describe('NonChargeTimeComponent', () => {
  let component: NonChargeTimeComponent;
  let fixture: ComponentFixture<NonChargeTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NonChargeTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NonChargeTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

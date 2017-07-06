import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NonChargeTimeItemComponent } from './non-charge-time-item.component';

describe('NonChargeTimeItemComponent', () => {
  let component: NonChargeTimeItemComponent;
  let fixture: ComponentFixture<NonChargeTimeItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NonChargeTimeItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NonChargeTimeItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

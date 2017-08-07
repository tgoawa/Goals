import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NonChargeItemComponent } from './non-charge-item.component';

describe('NonChargeItemComponent', () => {
  let component: NonChargeItemComponent;
  let fixture: ComponentFixture<NonChargeItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NonChargeItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NonChargeItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChargeTimeItemComponent } from './charge-time-item.component';

describe('ChargeTimeItemComponent', () => {
  let component: ChargeTimeItemComponent;
  let fixture: ComponentFixture<ChargeTimeItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChargeTimeItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChargeTimeItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

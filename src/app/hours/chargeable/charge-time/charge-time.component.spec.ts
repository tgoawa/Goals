import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChargeTimeComponent } from './charge-time.component';

describe('ChargeTimeComponent', () => {
  let component: ChargeTimeComponent;
  let fixture: ComponentFixture<ChargeTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChargeTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChargeTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HoursMainComponent } from './hours-main.component';

describe('HoursMainComponent', () => {
  let component: HoursMainComponent;
  let fixture: ComponentFixture<HoursMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoursMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoursMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

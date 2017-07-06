import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HoursEntryComponent } from './hours-entry.component';

describe('HoursEntryComponent', () => {
  let component: HoursEntryComponent;
  let fixture: ComponentFixture<HoursEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoursEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoursEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadOnlyShareholderMeetingComponent } from './read-only-shareholder-meeting.component';

describe('ReadOnlyShareholderMeetingComponent', () => {
  let component: ReadOnlyShareholderMeetingComponent;
  let fixture: ComponentFixture<ReadOnlyShareholderMeetingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadOnlyShareholderMeetingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadOnlyShareholderMeetingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

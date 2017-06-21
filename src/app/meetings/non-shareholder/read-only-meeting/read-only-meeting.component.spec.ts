import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadOnlyMeetingComponent } from './read-only-meeting.component';

describe('ReadOnlyMeetingComponent', () => {
  let component: ReadOnlyMeetingComponent;
  let fixture: ComponentFixture<ReadOnlyMeetingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadOnlyMeetingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadOnlyMeetingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

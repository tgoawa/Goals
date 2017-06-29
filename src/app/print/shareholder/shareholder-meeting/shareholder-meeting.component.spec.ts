import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareholderMeetingComponent } from './shareholder-meeting.component';

describe('ShareholderMeetingComponent', () => {
  let component: ShareholderMeetingComponent;
  let fixture: ComponentFixture<ShareholderMeetingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShareholderMeetingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareholderMeetingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

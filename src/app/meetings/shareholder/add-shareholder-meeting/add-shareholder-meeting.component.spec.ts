import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddShareholderMeetingComponent } from './add-shareholder-meeting.component';

describe('AddShareholderMeetingComponent', () => {
  let component: AddShareholderMeetingComponent;
  let fixture: ComponentFixture<AddShareholderMeetingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddShareholderMeetingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddShareholderMeetingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditShareholderMeetingComponent } from './edit-shareholder-meeting.component';

describe('EditShareholderMeetingComponent', () => {
  let component: EditShareholderMeetingComponent;
  let fixture: ComponentFixture<EditShareholderMeetingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditShareholderMeetingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditShareholderMeetingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

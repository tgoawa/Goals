import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShMeetingsListComponent } from './sh-meetings-list.component';

describe('ShMeetingsListComponent', () => {
  let component: ShMeetingsListComponent;
  let fixture: ComponentFixture<ShMeetingsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShMeetingsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShMeetingsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShteamMemberListComponent } from './shteam-member-list.component';

describe('ShteamMemberListComponent', () => {
  let component: ShteamMemberListComponent;
  let fixture: ComponentFixture<ShteamMemberListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShteamMemberListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShteamMemberListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

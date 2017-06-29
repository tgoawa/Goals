import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareholderCoachComponent } from './shareholder-coach.component';

describe('ShareholderCoachComponent', () => {
  let component: ShareholderCoachComponent;
  let fixture: ComponentFixture<ShareholderCoachComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShareholderCoachComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareholderCoachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

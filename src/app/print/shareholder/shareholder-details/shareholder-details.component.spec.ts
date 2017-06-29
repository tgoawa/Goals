import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareholderDetailsComponent } from './shareholder-details.component';

describe('ShareholderDetailsComponent', () => {
  let component: ShareholderDetailsComponent;
  let fixture: ComponentFixture<ShareholderDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShareholderDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareholderDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

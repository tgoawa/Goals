import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareholderPrintViewComponent } from './shareholder-print-view.component';

describe('ShareholderPrintViewComponent', () => {
  let component: ShareholderPrintViewComponent;
  let fixture: ComponentFixture<ShareholderPrintViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShareholderPrintViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareholderPrintViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

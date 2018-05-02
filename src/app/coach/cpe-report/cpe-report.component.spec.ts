import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CpeReportComponent } from './cpe-report.component';

describe('CpeReportComponent', () => {
  let component: CpeReportComponent;
  let fixture: ComponentFixture<CpeReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CpeReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CpeReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

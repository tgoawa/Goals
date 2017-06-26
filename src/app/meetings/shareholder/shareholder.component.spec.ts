import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareholderComponent } from './shareholder.component';

describe('ShareholderComponent', () => {
  let component: ShareholderComponent;
  let fixture: ComponentFixture<ShareholderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShareholderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

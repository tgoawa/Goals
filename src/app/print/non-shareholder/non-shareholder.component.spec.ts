import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NonShareholderComponent } from './non-shareholder.component';

describe('NonShareholderComponent', () => {
  let component: NonShareholderComponent;
  let fixture: ComponentFixture<NonShareholderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NonShareholderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NonShareholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

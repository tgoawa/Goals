import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadOnlySupportComponent } from './read-only-support.component';

describe('ReadOnlySupportComponent', () => {
  let component: ReadOnlySupportComponent;
  let fixture: ComponentFixture<ReadOnlySupportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadOnlySupportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadOnlySupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadOnlyDetailComponent } from './read-only-detail.component';

describe('ReadOnlyDetailComponent', () => {
  let component: ReadOnlyDetailComponent;
  let fixture: ComponentFixture<ReadOnlyDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadOnlyDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadOnlyDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

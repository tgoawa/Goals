import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadOnlyNotesComponent } from './read-only-notes.component';

describe('ReadOnlyNotesComponent', () => {
  let component: ReadOnlyNotesComponent;
  let fixture: ComponentFixture<ReadOnlyNotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadOnlyNotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadOnlyNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

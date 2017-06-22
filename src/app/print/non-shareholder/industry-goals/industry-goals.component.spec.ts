import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndustryGoalsComponent } from './industry-goals.component';

describe('IndustryGoalsComponent', () => {
  let component: IndustryGoalsComponent;
  let fixture: ComponentFixture<IndustryGoalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndustryGoalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndustryGoalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

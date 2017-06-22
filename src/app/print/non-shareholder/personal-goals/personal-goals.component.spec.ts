import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalGoalsComponent } from './personal-goals.component';

describe('PersonalGoalsComponent', () => {
  let component: PersonalGoalsComponent;
  let fixture: ComponentFixture<PersonalGoalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalGoalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalGoalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

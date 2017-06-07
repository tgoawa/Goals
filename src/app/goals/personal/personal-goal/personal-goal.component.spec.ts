import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core/';
import { By } from '@angular/platform-browser';
import { PersonalGoalComponent } from './personal-goal.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('PersonalComponent', () => {
  let component: PersonalGoalComponent;
  let fixture: ComponentFixture<PersonalGoalComponent>;
  let inputBox: DebugElement;
  let textarea: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ ReactiveFormsModule ],
      declarations: [ PersonalGoalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalGoalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    inputBox = fixture.debugElement.query(By.css('#Name'));
    textarea = fixture.debugElement.query(By.css('#Description'));
  });

  it('should create personal goal component', () => {
    expect(component).toBeTruthy();
  });

  it('should create goal name input', () => {
    expect(inputBox).toBeTruthy();
  });

  it('should create goal description input', () => {
    expect(textarea).toBeTruthy();
  });
});

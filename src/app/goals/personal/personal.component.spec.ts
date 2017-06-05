import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core/';
import { By } from '@angular/platform-browser';
import { PersonalComponent } from './personal.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('PersonalComponent', () => {
  let component: PersonalComponent;
  let fixture: ComponentFixture<PersonalComponent>;
  let inputBox: DebugElement;
  let textarea: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ ReactiveFormsModule ],
      declarations: [ PersonalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalComponent);
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

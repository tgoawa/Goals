import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ActionItemsComponent } from './action-items.component';
import { DebugElement } from '@angular/core/';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

describe('ActionItemsComponent', () => {
  let component: ActionItemsComponent;
  let fixture: ComponentFixture<ActionItemsComponent>;
  let checkbox: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ ReactiveFormsModule ],
      declarations: [ ActionItemsComponent ],
      providers: [FormBuilder]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    checkbox = fixture.debugElement.query(By.css('checkbox'));
  });

  it('should create action items component', () => {
    expect(component).toBeTruthy();
  });

  it('should create action item checkbox', () => {
    expect(checkbox).toBeTruthy();
  });

});

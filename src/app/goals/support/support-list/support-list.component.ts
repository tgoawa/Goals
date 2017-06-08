import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormArray } from '@angular/forms';
import { Support } from '../../goal';

@Component({
  selector: 'app-support-list',
  templateUrl: './support-list.component.html',
  styleUrls: ['./support-list.component.scss']
})
export class SupportListComponent implements OnInit {
  @Input('parentGoalForm') parentGoalForm: FormGroup;
  @Input('supports') supports: Support[];
  @Input('goalId') goalId: number;

  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit() {
    this.parentGoalForm.addControl('supports', new FormArray([]));
  }

  addSupport() {
    const support: Support = {
      SupportId: 0,
      GoalId: this.goalId,
      Support: '',
      DisplayDateCreated: '',
      DisplayDateModified: ''
    };

    this.supports.push(support);
    this.cd.detectChanges();
    return false;
  }

  removeSupport(index: number) {
    if (this.supports.length > 1) {
      this.supports.splice(index, 1);
      (<FormArray>this.parentGoalForm.get('supports')).removeAt(index);
    }
    return false;
  }
}

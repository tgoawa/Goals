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
  @Input('supports') Supports: Support[];
  @Input('goalId') goalId: number;

  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit() {
    this.parentGoalForm.addControl('Supports', new FormArray([]));
  }

  addSupport() {
    const support: Support = {
      SupportId: 0,
      GoalId: this.goalId,
      Support: '',
      DisplayDateCreated: '',
      DisplayDateModified: '',
      IsDirty: false
    };

    this.Supports.push(support);
    this.cd.detectChanges();
    return false;
  }

  removeSupport(index: number) {
    if (this.Supports.length > 1) {
      this.Supports.splice(index, 1);
      (<FormArray>this.parentGoalForm.get('Supports')).removeAt(index);
    }
    return false;
  }
}

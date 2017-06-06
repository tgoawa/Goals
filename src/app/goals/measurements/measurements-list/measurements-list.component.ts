import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormArray } from '@angular/forms';
import { Measurement } from '../../goal';

@Component({
  selector: 'app-measurements-list',
  templateUrl: './measurements-list.component.html',
  styleUrls: ['./measurements-list.component.scss']
})
export class MeasurementsListComponent implements OnInit {
  @Input('parentGoalForm') parentGoalForm: FormGroup;
  @Input('measurements') measurements: Measurement[];
  @Input('goalId') goalId: number;

  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit() {
    this.parentGoalForm.addControl('measurements', new FormArray([]));
  }

  addMeasurement() {
    const measurement: Measurement = {
      MeasurementId: 0,
      GoalId: this.goalId,
      Measurement: '',
      DisplayDateCreated: '',
      DisplayDateModified: ''
    };

    this.measurements.push(measurement);
    this.cd.detectChanges();
  }

  removeMeasurement(index: number) {
    if (this.measurements.length > 1) {
      this.measurements.splice(index, 1);
      (<FormArray>this.parentGoalForm.get('measurements')).removeAt(index);
    }
  }
}

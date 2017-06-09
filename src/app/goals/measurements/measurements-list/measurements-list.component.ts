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
  @Input('measurements') Measurements: Measurement[];
  @Input('goalId') goalId: number;

  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit() {
    this.parentGoalForm.addControl('Measurements', new FormArray([]));
  }

  addMeasurement() {
    const measurement: Measurement = {
      MeasurementId: 0,
      GoalId: this.goalId,
      Measurement: '',
      DisplayDateCreated: '',
      DisplayDateModified: ''
    };

    this.Measurements.push(measurement);
    this.cd.detectChanges();
    return false;
  }

  removeMeasurement(index: number) {
    if (this.Measurements.length > 1) {
      this.Measurements.splice(index, 1);
      (<FormArray>this.parentGoalForm.get('Measurements')).removeAt(index);
    }
    return false;
  }
}

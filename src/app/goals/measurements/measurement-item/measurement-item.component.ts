import { Component, OnInit, Input } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Measurement } from '../../goal';

@Component({
  selector: 'app-measurement-item',
  templateUrl: './measurement-item.component.html',
  styleUrls: ['./measurement-item.component.scss']
})
export class MeasurementItemComponent implements OnInit {
  @Input('measurementItems') measurementItems: FormArray;
  @Input('measurementItem') measurementItem: Measurement;

  measurementItemForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.measurementItemForm = this.toFormGroup(this.measurementItem);
    this.measurementItems.push(this.measurementItemForm);
  }

  private toFormGroup(data: Measurement) {
    const formGroup = this.fb.group({
      MeasurementId: data.MeasurementId,
      GoalId: data.GoalId,
      Measurement: [data.Measurement, Validators.required],
    });

    return formGroup;
  }
}

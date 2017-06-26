import { Component, OnInit, Input } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Detail } from '../../models/shmeeting';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  @Input('details') details: FormArray;
  @Input('detail') detail: Detail;

  detailForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.detailForm = this.toFormGroup(this.detail);
  }

  private toFormGroup(data: Detail) {
    const formGroup = this.fb.group({
      BillingsTier6: data.BillingsTier6,
      BillingsTier6GR: data.BillingsTier6GR,
      BillingsTier6PBR: data.BillingsTier6PBR,
      BillingsTiers1_3: data.BillingsTiers1_3,
      BillingsTiers4_5: data.BillingsTiers4_5,
      BillingsTransferredFromOthers: data.BillingsTransferredFromOthers,
      BillingsTransferredToOthers: data.BillingsTransferredToOthers,
      BusinessExistingClients: data.BusinessExistingClients,
      BusinessNewClients: data.BusinessNewClients,
      ChargeHours: data.ChargeHours,
      DaysinWIP_AR: data.DaysinWIP_AR,
      DisplayDateCreated: data.DisplayDateCreated,
      DisplayDateModified: data.DisplayDateModified,
      LostClients: data.LostClients,
      Realization: data.Realization,
      ReferralsSpecialityUnits: data.ReferralsSpecialityUnits,
      ShareHolderDetailTypeId: data.ShareHolderDetailTypeId,
      ShareHolderMeetingDetailId: data.ShareHolderMeetingDetailId,
      ShareHolderMeetingId: data.ShareHolderMeetingId,
      sDaysinWIP_AR: data.sDaysinWIP_AR,
      sRealization: data.sRealization,
    });

    return formGroup;
  }

}

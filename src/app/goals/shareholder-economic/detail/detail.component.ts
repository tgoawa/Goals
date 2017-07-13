import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Detail } from '../model/detail';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  @Input('detail') detail: Detail;
  @Input('title') title: string;

  detailForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.detailForm = this.toFormGroup();
  }

    private toFormGroup() {
    // const formGroup = this.fb.group({
    //   BillingsTier6: data.BillingsTier6,
    //   BillingsTier6GR: data.BillingsTier6GR,
    //   BillingsTier6PBR: data.BillingsTier6PBR,
    //   BillingsTiers1_3: data.BillingsTiers1_3,
    //   BillingsTiers4_5: data.BillingsTiers4_5,
    //   BillingsTransferredFromOthers: data.BillingsTransferredFromOthers,
    //   BillingsTransferredToOthers: data.BillingsTransferredToOthers,
    //   BusinessExistingClients: data.BusinessExistingClients,
    //   BusinessNewClients: data.BusinessNewClients,
    //   ChargeHours: data.ChargeHours,
    //   DaysinWIP_AR: data.DaysinWIP_AR,
    //   DisplayDateCreated: data.DisplayDateCreated,
    //   DisplayDateModified: data.DisplayDateModified,
    //   LostClients: data.LostClients,
    //   Realization: data.Realization,
    //   ReferralsSpecialityUnits: data.ReferralsSpecialityUnits,
    //   ShareHolderDetailTypeId: data.ShareHolderDetailTypeId,
    //   ShareHolderMeetingDetailId: data.ShareHolderMeetingDetailId,
    //   ShareHolderMeetingId: data.ShareHolderMeetingId,
    //   sDaysinWIP_AR: data.sDaysinWIP_AR,
    //   sRealization: data.sRealization,
    // });
    const formGroup = this.fb.group({
      BillingsTier6: 0,
      BillingsTier6GR: 0,
      BillingsTier6PBR: 0,
      BillingsTiers1_3: 0,
      BillingsTiers4_5: 0,
      BillingsTransferredFromOthers: 0,
      BillingsTransferredToOthers: 0,
      BusinessExistingClients: 0,
      BusinessNewClients: 0,
      ChargeHours: 0,
      DaysinWIP_AR: 0,
      DisplayDateCreated: 0,
      DisplayDateModified: 0,
      LostClients: 0,
      Realization: 0,
      ReferralsSpecialityUnits: 0,
      ShareHolderDetailTypeId: 0,
      ShareHolderMeetingDetailId: 0,
      ShareHolderMeetingId: 0,
      sDaysinWIP_AR: 0,
      sRealization: 0,
    });

    return formGroup;
  }

}

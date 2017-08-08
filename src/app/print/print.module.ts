import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PrintRoutingModule } from './print-routing.module';
import { PrintComponent } from './print.component';
import { NonShareholderComponent } from './non-shareholder/non-shareholder.component';
import { MeetingComponent } from './non-shareholder/meeting-questions/meeting.component';

import { PrintService } from './non-shareholder/services/print.service';
import { PersonalGoalsComponent } from './non-shareholder/personal-goals/personal-goals.component';
import { IndustryGoalsComponent } from './non-shareholder/industry-goals/industry-goals.component';
import { PrintViewComponent } from './non-shareholder/print-view/print-view.component';
import { ShareholderPrintService } from './shareholder/services/shareholder-print.service';
import { ShareholderComponent } from './shareholder/shareholder.component';
import { ShareholderPrintViewComponent } from './shareholder/shareholder-print-view/shareholder-print-view.component';
import { ShareholderMeetingComponent } from './shareholder/shareholder-meeting/shareholder-meeting.component';
import { ShareholderDetailsComponent } from './shareholder/shareholder-details/shareholder-details.component';
import { WigGoalComponent } from './shareholder/wig-goal/wig-goal.component';
import { ChargeTimeComponent } from './non-shareholder/charge-time/charge-time.component';
import { NonChargeItemComponent } from './non-shareholder/non-charge-item/non-charge-item.component';
import { HoursComponent } from './non-shareholder/hours/hours.component';
import { ChargeTimeItemComponent } from './non-shareholder/charge-time-item/charge-time-item.component';
import { NonChargeTimeComponent } from './non-shareholder/non-charge-time/non-charge-time.component';

@NgModule({
  imports: [
    CommonModule,
    PrintRoutingModule,
    FormsModule
  ],
  exports: [MeetingComponent,
    PersonalGoalsComponent,
    IndustryGoalsComponent,
    PrintViewComponent,
    ShareholderPrintViewComponent,
    ShareholderMeetingComponent,
    ShareholderDetailsComponent,
    WigGoalComponent,
    HoursComponent],
  declarations: [PrintComponent,
    NonShareholderComponent,
    MeetingComponent,
    PersonalGoalsComponent,
    IndustryGoalsComponent,
    PrintViewComponent,
    ShareholderComponent,
    ShareholderPrintViewComponent,
    ShareholderMeetingComponent,
    ShareholderDetailsComponent,
    WigGoalComponent,
    ChargeTimeComponent,
    NonChargeItemComponent,
    HoursComponent,
    ChargeTimeItemComponent,
    NonChargeTimeComponent],
  providers: [PrintService, ShareholderPrintService]
})
export class PrintModule { }

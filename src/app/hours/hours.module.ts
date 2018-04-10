import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CollapseModule, ModalModule } from 'ngx-bootstrap';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { HoursRoutingModule } from './hours-routing.module';
import { HoursComponent } from './hours.component';
import { ChargeTimeItemComponent } from './chargeable/charge-time-item/charge-time-item.component';
import { ChargeTimeComponent } from './chargeable/charge-time/charge-time.component';
import { NonChargeTimeItemComponent } from './non-chargeable/non-charge-time-item/non-charge-time-item.component';
import { NonChargeTimeComponent } from './non-chargeable/non-charge-time/non-charge-time.component';
import { HoursEntryComponent } from './hours-entry/hours-entry.component';
import { HoursService } from './services/hours.service';
import { DeactivateGuardService } from '../hours/services/deactivate-guard.service';
import { SurveySubGroupComponent } from './hours-entry/survey-sub-group/survey-sub-group.component';

@NgModule({
  imports: [
    CommonModule,
    CollapseModule,
    HoursRoutingModule,
    FormsModule,
    ModalModule.forRoot(),
    NgxChartsModule,
  ],
  declarations: [
    HoursComponent,
    ChargeTimeItemComponent,
    ChargeTimeComponent,
    NonChargeTimeItemComponent,
    NonChargeTimeComponent,
    HoursEntryComponent,
    SurveySubGroupComponent,
  ],
  providers: [HoursService, DeactivateGuardService]
})
export class HoursModule {}

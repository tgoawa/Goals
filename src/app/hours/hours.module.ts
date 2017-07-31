import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ModalModule } from 'ngx-bootstrap';

import { HoursRoutingModule } from './hours-routing.module';
import { HoursComponent } from './hours.component';
import { ChargeTimeItemComponent } from './chargeable/charge-time-item/charge-time-item.component';
import { ChargeTimeComponent } from './chargeable/charge-time/charge-time.component';
import { NonChargeTimeItemComponent } from './non-chargeable/non-charge-time-item/non-charge-time-item.component';
import { NonChargeTimeComponent } from './non-chargeable/non-charge-time/non-charge-time.component';
import { HoursEntryComponent } from './hours-entry/hours-entry.component';
import { HoursService } from './services/hours.service';
import { DeactivateGuardService } from '../hours/services/deactivate-guard.service';

@NgModule({
  imports: [
    CommonModule,
    HoursRoutingModule,
    FormsModule,
    ModalModule.forRoot()
  ],
  declarations: [HoursComponent,
    ChargeTimeItemComponent,
    ChargeTimeComponent,
    NonChargeTimeItemComponent,
    NonChargeTimeComponent,
    HoursEntryComponent],
  providers: [HoursService, DeactivateGuardService]
})
export class HoursModule { }

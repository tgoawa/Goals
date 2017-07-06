import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HoursRoutingModule } from './hours-routing.module';
import { HoursComponent } from './hours.component';
import { HoursListComponent } from './hours-list/hours-list.component';
import { ChargeTimeItemComponent } from './chargeable/charge-time-item/charge-time-item.component';
import { ChargeTimeComponent } from './chargeable/charge-time/charge-time.component';
import { NonChargeTimeItemComponent } from './non-chargeable/non-charge-time-item/non-charge-time-item.component';
import { NonChargeTimeComponent } from './non-chargeable/non-charge-time/non-charge-time.component';

@NgModule({
  imports: [
    CommonModule,
    HoursRoutingModule,
    FormsModule
  ],
  declarations: [HoursComponent,
    HoursListComponent,
    ChargeTimeItemComponent,
    ChargeTimeComponent,
    NonChargeTimeItemComponent,
    NonChargeTimeComponent]
})
export class HoursModule { }

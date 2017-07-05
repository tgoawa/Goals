import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HoursRoutingModule } from './hours-routing.module';
import { HoursComponent } from './hours.component';
import { HoursListComponent } from './hours-list/hours-list.component';
import { ChargeTimeItemComponent } from './charge-time-item/charge-time-item.component';

@NgModule({
  imports: [
    CommonModule,
    HoursRoutingModule
  ],
  declarations: [HoursComponent, HoursListComponent, ChargeTimeItemComponent]
})
export class HoursModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HoursRoutingModule } from './hours-routing.module';
import { HoursComponent } from './hours.component';
import { HoursMainComponent } from './hours-main/hours-main.component';

@NgModule({
  imports: [
    CommonModule,
    HoursRoutingModule
  ],
  declarations: [HoursComponent, HoursMainComponent]
})
export class HoursModule { }

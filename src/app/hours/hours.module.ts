import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HoursRoutingModule } from './hours-routing.module';
import { HoursComponent } from './hours.component';

@NgModule({
  imports: [
    CommonModule,
    HoursRoutingModule
  ],
  declarations: [HoursComponent]
})
export class HoursModule { }

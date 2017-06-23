import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoachRoutingModule } from './coach-routing.module';
import { CoachComponent } from './coach.component';
import { NonShareholderCoachComponent } from './non-shareholder-coach/non-shareholder-coach.component';

@NgModule({
  imports: [
    CommonModule,
    CoachRoutingModule
  ],
  declarations: [CoachComponent, NonShareholderCoachComponent]
})
export class CoachModule { }

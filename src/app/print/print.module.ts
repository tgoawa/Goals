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

@NgModule({
  imports: [
    CommonModule,
    PrintRoutingModule,
    FormsModule
  ],
  declarations: [PrintComponent, NonShareholderComponent, MeetingComponent, PersonalGoalsComponent, IndustryGoalsComponent],
  providers: [PrintService]
})
export class PrintModule { }

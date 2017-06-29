import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PrintModule } from '../print/print.module';

import { CoachRoutingModule } from './coach-routing.module';
import { CoachComponent } from './coach.component';
import { NonShareholderCoachComponent } from './non-shareholder-coach/non-shareholder-coach.component';
import { CoachService } from '../coach/service/coach.service';
import { TeamMemberListComponent } from './non-shareholder-coach/team-member-list/team-member-list.component';
import { MeetingComponent } from '../print/non-shareholder/meeting-questions/meeting.component';
import { PersonalGoalsComponent } from '../print/non-shareholder/personal-goals/personal-goals.component';
import { IndustryGoalsComponent } from '../print/non-shareholder/industry-goals/industry-goals.component';
import { PrintViewComponent } from '../print/non-shareholder/print-view/print-view.component';
import { PrintService } from '../print/non-shareholder/services/print.service';
import { ShareholderCoachComponent } from './shareholder-coach/shareholder-coach.component';
import { ShteamMemberListComponent } from './shareholder-coach/shteam-member-list/shteam-member-list.component';


@NgModule({
  imports: [
    CommonModule,
    CoachRoutingModule,
    FormsModule,
    PrintModule
  ],
  declarations: [CoachComponent,
    NonShareholderCoachComponent,
    TeamMemberListComponent,
    ShareholderCoachComponent,
    ShteamMemberListComponent
    ],
  providers: [ CoachService ]
})
export class CoachModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CoachRoutingModule } from './coach-routing.module';
import { CoachComponent } from './coach.component';
import { NonShareholderCoachComponent } from './non-shareholder-coach/non-shareholder-coach.component';
import { CoachService } from '../coach/service/coach.service';
import { TeamMemberListComponent } from './non-shareholder-coach/team-member-list/team-member-list.component';

@NgModule({
  imports: [
    CommonModule,
    CoachRoutingModule,
    FormsModule
  ],
  declarations: [CoachComponent, NonShareholderCoachComponent, TeamMemberListComponent],
  providers: [ CoachService ]
})
export class CoachModule { }

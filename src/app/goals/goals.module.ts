import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { ProgressbarModule, ModalModule, CollapseModule } from 'ngx-bootstrap';

import { GoalsRoutingModule } from './goals-routing.module';
import { GoalsComponent } from './goals.component';
import { ActionItemsComponent } from './actions/action-items/action-items.component';
import { ActionsListComponent } from './actions/actions-list/actions-list.component';
import { MeasurementsListComponent } from './measurements/measurements-list/measurements-list.component';
import { MeasurementItemComponent } from './measurements/measurement-item/measurement-item.component';
import { SupportListComponent } from './support/support-list/support-list.component';
import { SupportItemComponent } from './support/support-item/support-item.component';
import { NotesListComponent } from './notes/notes-list/notes-list.component';
import { NotesItemComponent } from './notes/notes-item/notes-item.component';
import { GoalListComponent } from './goal-list/goal-list.component';
import { IndustryTeamGoalListComponent } from './industry-team/industry-team-goal-list/industry-team-goal-list.component';
import { IndustryGoalService } from './industry-team/service/industry-goal.service';
import { AddIndustryGoalComponent } from './industry-team/add-industry-goal/add-industry-goal.component';
import { EditIndustryGoalComponent } from './industry-team/edit-industry-goal/edit-industry-goal.component';
import { CompetencyGoalListComponent } from './competency/competency-goal-list/competency-goal-list.component';
import { CompetencyGoalService } from './competency/service/competency-goal.service';
import { EditCompetencyGoalComponent } from './competency/edit-competency-goal/edit-competency-goal.component';
import { AddCompetencyGoalComponent } from './competency/add-competency-goal/add-competency-goal.component';
import { WigGoalListComponent } from './shareholder-WIG/wig-goal-list/wig-goal-list.component';
import { WigGoalServiceService } from './shareholder-WIG/service/wig-goal-service.service';
import { EditWigGoalComponent } from './shareholder-WIG/edit-wig-goal/edit-wig-goal.component';
import { AddWigGoalComponent } from './shareholder-WIG/add-wig-goal/add-wig-goal.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    GoalsRoutingModule,
    ProgressbarModule.forRoot(),
    ModalModule.forRoot(),
    CollapseModule.forRoot()
  ],
  declarations: [
                  GoalsComponent,
                  ActionItemsComponent,
                  ActionsListComponent,
                  MeasurementsListComponent,
                  MeasurementItemComponent,
                  SupportListComponent,
                  SupportItemComponent,
                  NotesListComponent,
                  NotesItemComponent,
                  GoalListComponent,
                  IndustryTeamGoalListComponent,
                  AddIndustryGoalComponent,
                  EditIndustryGoalComponent,
                  CompetencyGoalListComponent,
                  EditCompetencyGoalComponent,
                  AddCompetencyGoalComponent,
                  WigGoalListComponent,
                  EditWigGoalComponent,
                  AddWigGoalComponent
                ],
  providers: [ IndustryGoalService, CompetencyGoalService, WigGoalServiceService ]
})
export class GoalsModule { }

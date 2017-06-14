import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { ProgressbarModule, ModalModule, CollapseModule } from 'ngx-bootstrap';

import { GoalsRoutingModule } from './goals-routing.module';
import { GoalsComponent } from './goals.component';
import { ActionItemsComponent } from './actions/action-items/action-items.component';
import { EditPersonalGoalComponent } from './personal/edit-personal-goal/edit-personal-goal.component';
import { ActionsListComponent } from './actions/actions-list/actions-list.component';
import { MeasurementsListComponent } from './measurements/measurements-list/measurements-list.component';
import { MeasurementItemComponent } from './measurements/measurement-item/measurement-item.component';
import { SupportListComponent } from './support/support-list/support-list.component';
import { SupportItemComponent } from './support/support-item/support-item.component';
import { NotesListComponent } from './notes/notes-list/notes-list.component';
import { NotesItemComponent } from './notes/notes-item/notes-item.component';
import { PersonalGoalListComponent } from './personal/personal-goal-list/personal-goal-list.component';
import { PersonalGoalService } from '../goals/personal/service/personal-goal.service';
import { AddPersonalGoalComponent } from './personal/add-personal-goal/add-personal-goal.component';
import { GoalListComponent } from './goal-list/goal-list.component';
import { IndustryTeamGoalListComponent } from './industry-team/industry-team-goal-list/industry-team-goal-list.component';
import { IndustryGoalService } from './industry-team/service/industry-goal.service';
import { AddIndustryGoalComponent } from './industry-team/add-industry-goal/add-industry-goal.component';
import { EditIndustryGoalComponent } from './industry-team/edit-industry-goal/edit-industry-goal.component';
import { CompetencyGoalListComponent } from './shareholder-competency/competency-goal-list/competency-goal-list.component';
import { CompetencyGoalService } from './shareholder-competency/service/competency-goal.service';

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
                  EditPersonalGoalComponent,
                  ActionsListComponent,
                  MeasurementsListComponent,
                  MeasurementItemComponent,
                  SupportListComponent,
                  SupportItemComponent,
                  NotesListComponent,
                  NotesItemComponent,
                  PersonalGoalListComponent,
                  AddPersonalGoalComponent,
                  GoalListComponent,
                  IndustryTeamGoalListComponent,
                  AddIndustryGoalComponent,
                  EditIndustryGoalComponent,
                  CompetencyGoalListComponent
                ],
  providers: [ PersonalGoalService, IndustryGoalService, CompetencyGoalService ]
})
export class GoalsModule { }

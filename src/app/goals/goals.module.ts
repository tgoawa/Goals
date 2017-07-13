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
import { PersonalGoalListComponent } from './personal/personal-goal-list/personal-goal-list.component';
import { PersonalGoalService } from './personal/service/personal-goal.service';
import { EditPersonalGoalComponent } from './personal/edit-personal-goal/edit-personal-goal.component';
import { AddPersonalGoalComponent } from './personal/add-personal-goal/add-personal-goal.component';
import { WigGoalListComponent } from './shareholder-WIG/wig-goal-list/wig-goal-list.component';
import { WigGoalServiceService } from './shareholder-WIG/service/wig-goal-service.service';
import { EditWigGoalComponent } from './shareholder-WIG/edit-wig-goal/edit-wig-goal.component';
import { AddWigGoalComponent } from './shareholder-WIG/add-wig-goal/add-wig-goal.component';
import { EditEconomicGoalComponent } from './shareholder-economic/edit-economic-goal/edit-economic-goal.component';
import { EconomicGoalComponent } from './shareholder-economic/economic-goal/economic-goal.component';
import { ReadOnlyComponent } from './shareholder-economic/read-only/read-only.component';
import { DetailComponent } from './shareholder-economic/detail/detail.component';

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
                  PersonalGoalListComponent,
                  EditPersonalGoalComponent,
                  AddPersonalGoalComponent,
                  WigGoalListComponent,
                  EditWigGoalComponent,
                  AddWigGoalComponent,
                  EditEconomicGoalComponent,
                  EconomicGoalComponent,
                  ReadOnlyComponent,
                  DetailComponent
                ],
  providers: [ IndustryGoalService, PersonalGoalService, WigGoalServiceService ]
})
export class GoalsModule { }

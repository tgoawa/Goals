import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { ProgressbarModule, ModalModule } from 'ngx-bootstrap';

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

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    GoalsRoutingModule,
    ProgressbarModule.forRoot(),
    ModalModule.forRoot()
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
                  AddPersonalGoalComponent
                ],
  providers: [ PersonalGoalService ]
})
export class GoalsModule { }

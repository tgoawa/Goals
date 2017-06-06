import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { GoalsRoutingModule } from './goals-routing.module';
import { GoalsComponent } from './goals.component';
import { ActionItemsComponent } from './actions/action-items/action-items.component';
import { PersonalComponent } from './personal/personal.component';
import { ActionsListComponent } from './actions/actions-list/actions-list.component';
import { MeasurementsListComponent } from './measurements/measurements-list/measurements-list.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    GoalsRoutingModule
  ],
  declarations: [GoalsComponent, ActionItemsComponent, PersonalComponent, ActionsListComponent, MeasurementsListComponent]
})
export class GoalsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { GoalsRoutingModule } from './goals-routing.module';
import { GoalsComponent } from './goals.component';
import { ActionItemsComponent } from './action-items/action-items.component';
import { PersonalComponent } from './personal/personal.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    GoalsRoutingModule
  ],
  declarations: [GoalsComponent, ActionItemsComponent, PersonalComponent]
})
export class GoalsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GoalsRoutingModule } from './goals-routing.module';
import { GoalsComponent } from './goals.component';
import { ActionItemsComponent } from './action-items/action-items.component';

@NgModule({
  imports: [
    CommonModule,
    GoalsRoutingModule
  ],
  declarations: [GoalsComponent, ActionItemsComponent]
})
export class GoalsModule { }

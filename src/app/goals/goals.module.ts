import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GoalsRoutingModule } from './goals-routing.module';
import { GoalsComponent } from './goals.component';

@NgModule({
  imports: [
    CommonModule,
    GoalsRoutingModule
  ],
  declarations: [GoalsComponent]
})
export class GoalsModule { }

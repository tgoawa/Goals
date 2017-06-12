import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BsDropdownModule, CollapseModule } from 'ngx-bootstrap';

import { AppBaseRoutingModule } from './app-base-routing.module';
import { AppBaseComponent } from './app-base.component';
import { HeaderComponent } from '../header/header.component';
import { HomeComponent } from '../home/home.component';
import { GoalsModule } from '../goals/goals.module';

@NgModule({
  imports: [
    CommonModule,
    AppBaseRoutingModule,
    CollapseModule.forRoot(),
    BsDropdownModule.forRoot(),
    GoalsModule,
  ],
  declarations: [AppBaseComponent,
    HeaderComponent,
    HomeComponent]
})
export class AppBaseModule { }

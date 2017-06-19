import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MeetingsRoutingModule } from './meetings-routing.module';
import { MeetingsComponent } from './meetings.component';

@NgModule({
  imports: [
    CommonModule,
    MeetingsRoutingModule
  ],
  declarations: [MeetingsComponent]
})
export class MeetingsModule { }

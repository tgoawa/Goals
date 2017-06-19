import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MeetingsRoutingModule } from './meetings-routing.module';
import { MeetingsComponent } from './meetings.component';
import { MeetingsListComponent } from './non-shareholder/meetings-list/meetings-list.component';

@NgModule({
  imports: [
    CommonModule,
    MeetingsRoutingModule
  ],
  declarations: [MeetingsComponent, MeetingsListComponent]
})
export class MeetingsModule { }

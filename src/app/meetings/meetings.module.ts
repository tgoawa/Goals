import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalModule, CollapseModule } from 'ngx-bootstrap';

import { MeetingsRoutingModule } from './meetings-routing.module';
import { MeetingsComponent } from './meetings.component';
import { MeetingsListComponent } from './non-shareholder/meetings-list/meetings-list.component';
import { QuestionService } from '../meetings/services/question.service';
import { MeetingsService } from '../meetings/non-shareholder/services/meetings.service';
import { MeetingListComponent } from './meeting-list/meeting-list.component';

@NgModule({
  imports: [
    CommonModule,
    MeetingsRoutingModule,
    CollapseModule.forRoot(),
  ],
  declarations: [MeetingsComponent, MeetingsListComponent, MeetingListComponent],
  providers: [QuestionService, MeetingsService]
})
export class MeetingsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ModalModule, TypeaheadModule, CollapseModule } from 'ngx-bootstrap';

import { MeetingsRoutingModule } from './meetings-routing.module';
import { MeetingsComponent } from './meetings.component';
import { MeetingsListComponent } from './non-shareholder/meetings-list/meetings-list.component';
import { QuestionService } from '../meetings/non-shareholder/services/question.service';
import { MeetingsService } from '../meetings/non-shareholder/services/meetings.service';
import { MeetingListComponent } from './meeting-list/meeting-list.component';
import { EditMeetingComponent } from './non-shareholder/edit-meeting/edit-meeting.component';
import { CoachService } from '../meetings/non-shareholder/services/coach.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MeetingsRoutingModule,
    CollapseModule.forRoot(),
    ModalModule.forRoot(),
    TypeaheadModule.forRoot(),
  ],
  declarations: [MeetingsComponent, MeetingsListComponent, MeetingListComponent, EditMeetingComponent],
  providers: [QuestionService, MeetingsService, CoachService]
})
export class MeetingsModule { }

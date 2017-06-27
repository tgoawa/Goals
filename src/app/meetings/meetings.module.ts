import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ModalModule, TypeaheadModule, CollapseModule, DatepickerModule } from 'ngx-bootstrap';

import { MeetingsRoutingModule } from './meetings-routing.module';
import { MeetingsComponent } from './meetings.component';
import { MeetingsListComponent } from './non-shareholder/meetings-list/meetings-list.component';
import { QuestionService } from '../meetings/non-shareholder/services/question.service';
import { MeetingsService } from '../meetings/non-shareholder/services/meetings.service';
import { MeetingListComponent } from './meeting-list/meeting-list.component';
import { EditMeetingComponent } from './non-shareholder/edit-meeting/edit-meeting.component';
import { CoachService } from '../meetings/non-shareholder/services/coach.service';
import { AddMeetingComponent } from './non-shareholder/add-meeting/add-meeting.component';
import { ReadOnlyMeetingComponent } from './non-shareholder/read-only-meeting/read-only-meeting.component';
import { ShMeetingsListComponent } from './shareholder/sh-meetings-list/sh-meetings-list.component';
import { ShareholderMeetingService } from './shareholder/service/shareholder-meeting.service';
import { EditShareholderMeetingComponent } from './shareholder/edit-shareholder-meeting/edit-shareholder-meeting.component';
import { SupportListComponent } from './shareholder/support/support-list/support-list.component';
import { SupportItemComponent } from './shareholder/support/support-item/support-item.component';
import { DetailsListComponent } from './shareholder/details/details-list/details-list.component';
import { DetailComponent } from './shareholder/details/detail/detail.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MeetingsRoutingModule,
    CollapseModule.forRoot(),
    ModalModule.forRoot(),
    TypeaheadModule.forRoot(),
    DatepickerModule.forRoot()
  ],
  declarations: [MeetingsComponent,
  MeetingsListComponent,
  MeetingListComponent,
  EditMeetingComponent,
  AddMeetingComponent,
  ReadOnlyMeetingComponent,
  ShMeetingsListComponent,
  EditShareholderMeetingComponent,
  SupportListComponent,
  SupportItemComponent,
  DetailsListComponent,
  DetailComponent],
  providers: [QuestionService, MeetingsService, CoachService, ShareholderMeetingService]
})
export class MeetingsModule { }

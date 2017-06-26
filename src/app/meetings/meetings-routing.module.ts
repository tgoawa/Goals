import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MeetingsComponent } from '../meetings/meetings.component';
import { MeetingsListComponent } from '../meetings/non-shareholder/meetings-list/meetings-list.component';
import { ShMeetingsListComponent } from '../meetings/shareholder/sh-meetings-list/sh-meetings-list.component';

const routes: Routes = [
  {
    path: '',
    component: MeetingsComponent,
    children: [
      {path: 'meeting-list', component: MeetingsListComponent },
      {path: 'shareholder-meeting-list', component: ShMeetingsListComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MeetingsRoutingModule { }

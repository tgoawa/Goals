import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MeetingsComponent } from '../meetings/meetings.component';

const routes: Routes = [
  {
    path: '',
    component: MeetingsComponent,
    children: [
      { }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MeetingsRoutingModule { }

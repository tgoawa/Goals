import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HoursEntryComponent } from '../hours/hours-entry/hours-entry.component';
import { DeactivateGuardService } from '../hours/services/deactivate-guard.service';

const routes: Routes = [
  {
    path: '',
    canDeactivate: [DeactivateGuardService],
    component: HoursEntryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HoursRoutingModule { }

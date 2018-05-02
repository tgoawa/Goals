import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoachComponent } from './coach.component';
import { NonShareholderCoachComponent } from './non-shareholder-coach/non-shareholder-coach.component';
import { ShareholderCoachComponent } from './shareholder-coach/shareholder-coach.component';
import { CpeReportComponent } from './cpe-report/cpe-report.component';

const routes: Routes = [
  {
    path: '',
    component: CoachComponent,
    children: [
      {path: 'non-shareholder-coach', component: NonShareholderCoachComponent},
      {path: 'shareholder-coach', component: ShareholderCoachComponent},
      {path: 'cpe-list', component: CpeReportComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoachRoutingModule { }

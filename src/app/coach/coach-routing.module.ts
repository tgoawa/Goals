import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoachComponent } from './coach.component';
import { NonShareholderCoachComponent } from './non-shareholder-coach/non-shareholder-coach.component';

const routes: Routes = [
  {
    path: '',
    component: CoachComponent,
    children: [
      {path: 'non-shareholder-coach', component: NonShareholderCoachComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoachRoutingModule { }

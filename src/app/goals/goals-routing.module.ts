import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GoalsComponent } from './goals.component';
import { PersonalGoalComponent } from '../goals/personal/personal-goal.component';

const routes: Routes = [
  {
    path: 'goals',
    component: GoalsComponent,
    children: [
      {path: 'personal', component: PersonalGoalComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GoalsRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GoalsComponent } from './goals.component';
import { PersonalGoalListComponent } from '../goals/personal/personal-goal-list/personal-goal-list.component';
import { IndustryTeamGoalListComponent } from '../goals/industry-team/industry-team-goal-list/industry-team-goal-list.component';

const routes: Routes = [
  {
    path: '',
    component: GoalsComponent,
    children: [
      {path: 'personal', component: PersonalGoalListComponent},
      {path: 'industry-team', component: IndustryTeamGoalListComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GoalsRoutingModule { }

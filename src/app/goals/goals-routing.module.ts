import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GoalsComponent } from './goals.component';
import { PersonalGoalListComponent } from '../goals/personal/personal-goal-list/personal-goal-list.component';
import { IndustryTeamGoalListComponent } from '../goals/industry-team/industry-team-goal-list/industry-team-goal-list.component';
import { CompetencyGoalListComponent } from '../goals/shareholder-competency/competency-goal-list/competency-goal-list.component';
import { WigGoalListComponent } from '../goals/shareholder-WIG/wig-goal-list/wig-goal-list.component';

const routes: Routes = [
  {
    path: '',
    component: GoalsComponent,
    children: [
      {path: 'personal', component: PersonalGoalListComponent},
      {path: 'industry-team', component: IndustryTeamGoalListComponent},
      {path: 'shareholder-competency', component: CompetencyGoalListComponent},
      {path: 'shareholder-wig', component: WigGoalListComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GoalsRoutingModule { }

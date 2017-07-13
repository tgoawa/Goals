import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GoalsComponent } from './goals.component';
import { IndustryTeamGoalListComponent } from '../goals/industry-team/industry-team-goal-list/industry-team-goal-list.component';
import { PersonalGoalListComponent } from './personal/personal-goal-list/personal-goal-list.component';
import { WigGoalListComponent } from '../goals/shareholder-WIG/wig-goal-list/wig-goal-list.component';
import { EconomicGoalComponent } from '../goals/shareholder-economic/economic-goal/economic-goal.component';

const routes: Routes = [
  {
    path: '',
    component: GoalsComponent,
    children: [
      {path: 'industry-team', component: IndustryTeamGoalListComponent},
      {path: 'personal', component: PersonalGoalListComponent},
      {path: 'shareholder-wig', component: WigGoalListComponent},
      {path: 'shareholder-economic', component: EconomicGoalComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GoalsRoutingModule { }

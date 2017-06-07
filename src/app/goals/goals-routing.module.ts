import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GoalsComponent } from './goals.component';
import { PersonalGoalListComponent } from '../goals/personal/personal-goal-list/personal-goal-list.component';

const routes: Routes = [
  {
    path: 'goals',
    component: GoalsComponent,
    children: [
      {path: 'personal', component: PersonalGoalListComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GoalsRoutingModule { }

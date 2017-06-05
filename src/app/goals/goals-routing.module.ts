import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GoalsComponent } from './goals.component';
import { PersonalComponent } from '../goals/personal/personal.component';

const routes: Routes = [
  {
    path: 'goals',
    component: GoalsComponent,
    children: [
      {path: 'personal', component: PersonalComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GoalsRoutingModule { }

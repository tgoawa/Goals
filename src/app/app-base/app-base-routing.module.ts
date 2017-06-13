import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { AuthGuard } from '../auth.guard';
import { AppBaseComponent } from './app-base.component';
import { GoalsComponent } from '../goals/goals.component';
import { TeamMemberResolver } from '../teamMember';


const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    resolve: {
      teamMemberData: TeamMemberResolver
    },
    component: AppBaseComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'goals', loadChildren: '../goals/goals.module#GoalsModule' }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppBaseRoutingModule { }
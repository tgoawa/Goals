import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrintComponent } from './print.component';
import { NonShareholderComponent } from './non-shareholder/non-shareholder.component';
import { ShareholderComponent } from './shareholder/shareholder.component';

const routes: Routes = [
  {
    path: '',
    component: PrintComponent,
    children: [
      {path: 'non-shareholder', component: NonShareholderComponent},
      {path: 'shareholder', component: ShareholderComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrintRoutingModule { }

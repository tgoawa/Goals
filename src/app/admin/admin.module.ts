import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdminEntryComponent } from './admin-entry/admin-entry.component';
import { AdminService } from './services/admin.service';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  declarations: [AdminComponent, AdminEntryComponent],
  providers: [ AdminService ]
})
export class AdminModule { }

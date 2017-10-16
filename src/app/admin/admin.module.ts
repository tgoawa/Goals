import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TypeaheadModule } from 'ngx-bootstrap';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdminEntryComponent } from './admin-entry/admin-entry.component';
import { AdminService } from './services/admin.service';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    TypeaheadModule.forRoot(),
    FormsModule
  ],
  declarations: [AdminComponent, AdminEntryComponent],
  providers: [ AdminService ]
})
export class AdminModule { }

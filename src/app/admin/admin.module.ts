import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MenswearsComponent } from './menswears/menswears.component';
import { WomenwearsComponent } from './womenwears/womenwears.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import{MatTableModule} from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';

import {MatTabsModule} from '@angular/material/tabs';
import {MatListModule} from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import { ShirtsComponent } from './shirts/shirts.component';
import { AddShirtsComponent } from './add-shirts/add-shirts.component';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [DashboardComponent, MenswearsComponent, WomenwearsComponent, ShirtsComponent, AddShirtsComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,MatTabsModule,MatListModule,MatPaginatorModule,MatProgressSpinnerModule,
    MatTableModule,
    MatButtonModule,MatIconModule
    ,MatCardModule,MatMenuModule,MatInputModule,MatDialogModule,ReactiveFormsModule,FormsModule
  ]
})
export class AdminModule { }

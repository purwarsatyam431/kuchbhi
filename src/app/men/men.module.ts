import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenRoutingModule } from './men-routing.module';
import { PantComponent } from './pant/pant.component';
import { ShirtComponent } from './shirt/shirt.component';
import { DetailComponent } from './detail/detail.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card'

import { MenserviceService } from './menservice.service';
import { SharedModule } from '../shared/shared.module';
@NgModule({
  declarations: [PantComponent, ShirtComponent, DetailComponent],
  imports: [
    CommonModule,MatButtonModule,MatCardModule,MatIconModule,MatSidenavModule,
    MenRoutingModule,SharedModule
  ],
  exports:[]
  ,
  providers:[]
})
export class MenModule { }

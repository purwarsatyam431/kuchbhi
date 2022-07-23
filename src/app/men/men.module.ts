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
import { MinLengthPipe } from '../pipes/min-length.pipe';
import { MenserviceService } from './menservice.service';
@NgModule({
  declarations: [PantComponent, ShirtComponent, DetailComponent ,MinLengthPipe],
  imports: [
    CommonModule,MatButtonModule,MatCardModule,MatIconModule,MatSidenavModule,
    MenRoutingModule
  ],
  exports:[MinLengthPipe]
  ,
  providers:[]
})
export class MenModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatChipsModule} from '@angular/material/chips';
import { SharedRoutingModule } from './shared-routing.module';
import { MinLengthPipe } from './pipes/min-length.pipe';
import { FilterPipe } from './pipes/filter.pipe';


@NgModule({
  declarations: [FilterPipe,MinLengthPipe],
  imports: [
    CommonModule,
    SharedRoutingModule,MatChipsModule
  ],
  exports:[FilterPipe,MinLengthPipe]
})
export class SharedModule { }

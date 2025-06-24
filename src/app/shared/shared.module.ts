import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatChipsModule} from '@angular/material/chips';
import { SharedRoutingModule } from './shared-routing.module';
import { MinLengthPipe } from './pipes/min-length.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { AgePipe } from './pipes/age.pipe';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [FilterPipe,MinLengthPipe, AgePipe,],
  imports: [
    CommonModule,
    SharedRoutingModule,MatChipsModule,MatDatepickerModule,MatNativeDateModule,MatIconModule,MatButtonModule,MatFormFieldModule,MatInputModule
  ],
  exports:[FilterPipe,MinLengthPipe,AgePipe,MatDatepickerModule,MatNativeDateModule,MatIconModule,MatButtonModule,MatFormFieldModule,MatInputModule]
})
export class SharedModule { }

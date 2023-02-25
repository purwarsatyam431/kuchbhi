import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatChipsModule} from '@angular/material/chips';
import { SharedRoutingModule } from './shared-routing.module';
import { MinLengthPipe } from './pipes/min-length.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import {TranslateLoader, TranslateModule, TranslateStore} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
@NgModule({
  declarations: [FilterPipe,MinLengthPipe],
  imports: [
    CommonModule,
    SharedRoutingModule,MatChipsModule,   TranslateModule.forChild({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
  })
  ],
  exports:[FilterPipe,MinLengthPipe,TranslateModule],
})
export class SharedModule { }
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}
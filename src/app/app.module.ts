import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import {HttpClientModule,HttpClient} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenRoutingModule } from './men/men-routing.module';
import { MenModule } from './men/men.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card';
import { ErrorComponent } from './error/error.component';
import { BannerComponent } from './banner/banner.component'
import { AdminModule } from './admin/admin.module';
import { AdminRoutingModule } from './admin/admin-routing.module';
import { MatMenuModule } from '@angular/material/menu';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component'
import { MatInputModule } from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { LoadingBarModule } from '@ngx-loading-bar/core';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { CartComponent } from './cart/cart.component';
import {MatBadgeModule} from '@angular/material/badge';
import { SnakComponent } from './snak/snak.component';
import { MyprofileComponent } from './Components/myprofile/myprofile.component';
import { EditProfileComponent } from './Components/edit-profile/edit-profile.component';
import { EditFieldComponent } from './Components/edit-field/edit-field.component';
import { WishlistComponent } from './Components/wishlist/wishlist.component';
import { RecentOrderComponent } from './Components/recent-order/recent-order.component';
import { OrderHistoryComponent } from './Components/order-history/order-history.component';
import {MatStepperModule,MatStepper} from '@angular/material/stepper';
// import {MinLengthPipe} from '../app/pipes/min-length.pipe'
import {CdkStepperModule} from '@angular/cdk/stepper';
import {MatSelectModule} from '@angular/material/select';
import { CareerComponent } from './career/career.component';
import { SharedModule } from './shared/shared.module';
// import { FilterPipe } from './pipes/filter.pipe';
import {TranslateLoader, TranslateModule, TranslateStore} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ErrorComponent,
    BannerComponent,
    LoginComponent,
    CartComponent,
    SnakComponent,
    MyprofileComponent,
    EditProfileComponent,
    EditFieldComponent,
    WishlistComponent,
    RecentOrderComponent,
    OrderHistoryComponent,
    CareerComponent,
   
  ],
  imports: [
    BrowserModule,
    MenModule,HttpClientModule,MatStepperModule,MatToolbarModule,MatButtonModule,MatIconModule,MatSidenavModule,MatCardModule
    ,MatMenuModule,ReactiveFormsModule,MatInputModule,MatSnackBarModule,IvyCarouselModule,CdkStepperModule,
    LoadingBarHttpClientModule,MatBadgeModule,FormsModule,MatSelectModule,
SharedModule,
    LoadingBarRouterModule,
    LoadingBarModule,
    MenRoutingModule,
    AdminModule,
    AdminRoutingModule,
    AppRoutingModule,
    BrowserAnimationsModule,    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
  })
  ],
  providers: [MatStepper,TranslateStore],
  exports:[MenModule],
  bootstrap: [AppComponent],
   schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
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
// import {MinLengthPipe} from '../app/pipes/min-length.pipe'

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
   
  ],
  imports: [
    BrowserModule,
    MenModule,HttpClientModule,MatToolbarModule,MatButtonModule,MatIconModule,MatSidenavModule,MatCardModule
    ,MatMenuModule,ReactiveFormsModule,MatInputModule,MatSnackBarModule,IvyCarouselModule,
    LoadingBarHttpClientModule,MatBadgeModule,FormsModule,

    
    LoadingBarRouterModule,

  
    LoadingBarModule,
    MenRoutingModule,
    AdminModule,
    AdminRoutingModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  exports:[],
  bootstrap: [AppComponent]
})
export class AppModule { }

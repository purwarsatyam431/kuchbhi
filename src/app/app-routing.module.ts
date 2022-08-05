import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { BannerComponent } from './banner/banner.component';
import { EditProfileComponent } from './Components/edit-profile/edit-profile.component';
import { MyprofileComponent } from './Components/myprofile/myprofile.component';
import { RecentOrderComponent } from './Components/recent-order/recent-order.component';
import { WishlistComponent } from './Components/wishlist/wishlist.component';
import { OrderHistoryComponent } from './Components/order-history/order-history.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { AuthForCartGuard } from './services/auth-for-cart.guard';
import { CareerComponent } from './career/career.component';

const routes: Routes = [
  {path:"My-profile",component:MyprofileComponent,canActivate:[AuthForCartGuard]},
 
  {path:"edit-Profile/:userId",component:EditProfileComponent ,canActivate:[AuthForCartGuard]},
  {path:"career",component:CareerComponent},
  {path:"wishlist",component:WishlistComponent,canActivate:[AuthForCartGuard]},
  // {path:"adminLogin",component:AdminLoginComponent},
  {path:"adminLogin",loadChildren:()=>import('./admin/admin.module').then(mod=>mod.AdminModule)},
  {path:"login",component:LoginComponent},
  {path:"recentOrder",component:RecentOrderComponent},
  {path:"orderhistory",component:OrderHistoryComponent},
  {path:'',redirectTo:'',pathMatch:'full'},
  {path:"**",component:ErrorComponent},
  {path:"banner",component:BannerComponent},


 
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { BannerComponent } from './banner/banner.component';

import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:"adminLogin",component:AdminLoginComponent},
  {path:"login",component:LoginComponent},
  {path:'',redirectTo:'',pathMatch:'full'},
  {path:"**",component:ErrorComponent},
  {path:"banner",component:BannerComponent},

 
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

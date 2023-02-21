import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../services/auth.guard';
import { AddShirtsComponent } from './add-shirts/add-shirts.component';
import { AdminCareerListComponent } from './admin-career-list/admin-career-list.component';
import { AdminCareerComponent } from './admin-career/admin-career.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MenswearsComponent } from './menswears/menswears.component';
import { ShirtsComponent } from './shirts/shirts.component';
import { WomenwearsComponent } from './womenwears/womenwears.component';


const routes: Routes = [
  {path:'',component:AdminLoginComponent},
  {path:"admin",component:AdminComponent ,canActivate: [AuthGuard],children:[
    {path:"Dashboard",component:DashboardComponent},
    {path:"pants",component:MenswearsComponent},
    {path:"women",component:WomenwearsComponent} ,
    {path:"shirts",component:ShirtsComponent},
    {path:"addShirts",component:AddShirtsComponent},
    {path:"addShirts/:id",component:AddShirtsComponent},
    {path:'jobVaccancy',component:AdminCareerComponent},
    {path:'jobVaccancylist',component:AdminCareerListComponent}
  ]},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers:[AuthGuard]
})
export class AdminRoutingModule { }

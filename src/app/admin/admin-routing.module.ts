import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../services/auth.guard';
import { AddShirtsComponent } from './add-shirts/add-shirts.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MenswearsComponent } from './menswears/menswears.component';
import { ShirtsComponent } from './shirts/shirts.component';
import { WomenwearsComponent } from './womenwears/womenwears.component';


const routes: Routes = [
  {path:"Dashboard",component:DashboardComponent ,canActivate: [AuthGuard],children:[
    {path:"pants",component:MenswearsComponent},
    {path:"women",component:WomenwearsComponent} ,
    {path:"shirts",component:ShirtsComponent},
    {path:"addShirts",component:AddShirtsComponent},
    {path:"addShirts/:id",component:AddShirtsComponent}
  ]},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers:[AuthGuard]
})
export class AdminRoutingModule { }

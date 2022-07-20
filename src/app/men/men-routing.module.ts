import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from '../cart/cart.component';
import { AuthForCartGuard } from '../services/auth-for-cart.guard';
import { DetailComponent } from './detail/detail.component';
import { MenserviceService } from './menservice.service';
import { PantComponent } from './pant/pant.component';
import { ShirtComponent } from './shirt/shirt.component';


const routes: Routes = [
  {path:"pant",component:PantComponent},
  {path:"shirt",component:ShirtComponent},
  {path:"detail/:id",component:DetailComponent},
  {path:'cart',component:CartComponent,canActivate:[AuthForCartGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers:[MenserviceService]
})
export class MenRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from '../cart/cart.component';
import { DetailComponent } from './detail/detail.component';
import { PantComponent } from './pant/pant.component';
import { ShirtComponent } from './shirt/shirt.component';


const routes: Routes = [
  {path:"pant",component:PantComponent},
  {path:"shirt",component:ShirtComponent},
  {path:"detail/:id",component:DetailComponent},
  {path:'cart',component:CartComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenRoutingModule { }

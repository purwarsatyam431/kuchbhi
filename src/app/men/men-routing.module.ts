import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import { PantComponent } from './pant/pant.component';
import { ShirtComponent } from './shirt/shirt.component';


const routes: Routes = [
  {path:"pant",component:PantComponent},
  {path:"shirt",component:ShirtComponent},
  {path:"detail/:id",component:DetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenRoutingModule { }

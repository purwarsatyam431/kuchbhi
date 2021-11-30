import { AfterContentChecked, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviourService } from 'src/app/behaviour.service';
import { MenserviceService } from 'src/app/men/menservice.service';
import { Products } from 'src/app/men/products';

@Component({
  selector: 'app-add-shirts',
  templateUrl: './add-shirts.component.html',
  styleUrls: ['./add-shirts.component.css']
})
export class AddShirtsComponent implements OnInit,AfterContentChecked {
editMode:string='false';
  constructor(private s1:MenserviceService, public route:ActivatedRoute,private rt:Router ,private behaviour:BehaviourService) { }
addEmp=new Products();
editEmp=new Products();
ngAfterContentChecked(){
  
}
  ngOnInit(): void {

   this.behaviour.editMode.subscribe((d)=>this.editMode=d)
   this.editpantss()
  }
  form:FormGroup=new FormGroup({
    MRP:new FormControl("",Validators.required),
    Rate:new FormControl("",Validators.required),
    image:new FormControl(""),
    product_name:new FormControl("",Validators.required),
    quantity:new FormControl("",Validators.required),
    short_desc:new FormControl("",Validators.required),

  })
  funSave(){
    if(this.form.valid===true){
   //   this.addEmp.id=this.form.value.id
      this.addEmp.MRP=this.form.value.MRP;
      this.addEmp.Rate=this.form.value.Rate;
      this.addEmp.image=this.form.value.image;
      this.addEmp.product_name=this.form.value.product_name;
      this.addEmp.quantity=this.form.value.quantity;
      this.addEmp.short_desc=this.form.value.short_desc;
      this.s1.postData(this.addEmp).subscribe((d)=>console.log(d))
      this.form.reset()
      }
      else{
        alert("Enter Data")
      }
  }

  edit(){
    
    console.log(this.route.snapshot.params.id)
this.s1.getMenPantDetail(this.route.snapshot.params.id).subscribe((d)=>
this.form=new FormGroup({
  MRP:new FormControl(d['MRP']),
  Rate:new FormControl(d['Rate']),
  image:new FormControl(d['image']),
  product_name:new FormControl(d['product_name']),
  quantity:new FormControl(d['quantity']),
  short_desc:new FormControl(d['short_desc'])
}))
  }

  editData(){
    this.s1.editShirt(this.route.snapshot.params.id,this.form.value).subscribe((d)=>console.log(d))
    this.rt.navigate(['/Dashboard/shirts'])
   
  }
  editpantss(){
    if(this.editMode==='editPant'){
    console.log(this.route.snapshot.params.id)
this.s1.getMenPantDetail(this.route.snapshot.params.id).subscribe((d)=>
this.form=new FormGroup({
  MRP:new FormControl(d['MRP']),
  Rate:new FormControl(d['Rate']),
  image:new FormControl(d['image']),
  product_name:new FormControl(d['product_name']),
  quantity:new FormControl(d['quantity']),
  short_desc:new FormControl(d['short_desc'])
}))}
else{
  console.log(this.route.snapshot.params.id)
  this.s1.getMenShirtDetail(this.route.snapshot.params.id).subscribe((d)=>
  this.form=new FormGroup({
    MRP:new FormControl(d['MRP']),
    Rate:new FormControl(d['Rate']),
    image:new FormControl(d['image']),
    product_name:new FormControl(d['product_name']),
    quantity:new FormControl(d['quantity']),
    short_desc:new FormControl(d['short_desc'])
  }))
}
  }

  editPantData(){
    this.s1.editpant(this.route.snapshot.params.id,this.form.value).subscribe((d)=>console.log(d))
    this.rt.navigate(['/Dashboard/pants'])
  }

  postPant(){
    if(this.form.valid===true){
      //   this.addEmp.id=this.form.value.id
         this.addEmp.MRP=this.form.value.MRP;
         this.addEmp.Rate=this.form.value.Rate;
         this.addEmp.image=this.form.value.image;
         this.addEmp.product_name=this.form.value.product_name;
         this.addEmp.quantity=this.form.value.quantity;
         this.addEmp.short_desc=this.form.value.short_desc;
         this.s1.postPantData(this.addEmp).subscribe((d)=>console.log(d))
         this.form.reset()
         }
         else{
           alert("Enter Data")
         }
  }



}

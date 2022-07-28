import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviourService } from 'src/app/behaviour.service';
import { MenserviceService } from 'src/app/men/menservice.service';
import { WomenwearsComponent } from '../womenwears/womenwears.component';

@Component({
  selector: 'app-declaration',
  templateUrl: './declaration.component.html',
  styleUrls: ['./declaration.component.css']
})
export class DeclarationComponent implements OnInit {

  constructor(private s1:MenserviceService, public route:ActivatedRoute,private rt:Router ,
    
    private behaviour:BehaviourService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<WomenwearsComponent>
    ) { }
dayats:any;

form:FormGroup=new FormGroup({
  MRP:new FormControl("",Validators.required),
  Rate:new FormControl("",Validators.required),
  image:new FormControl(""),
  product_name:new FormControl("",Validators.required),
  quantity:new FormControl("",Validators.required),
  short_desc:new FormControl("",Validators.required),
  status:new FormControl("",Validators.required),
  userId:new FormControl("",Validators.required),
})
  ngOnInit(): void {
this.editpantss()
  }
  editpantss(){
   console.log(this.data)
    console.log(this.route.snapshot.params.id)
this.s1.getOrderDetail(this.data.userid,this.data.id).subscribe((d)=>{
  this.form=new FormGroup({
    MRP:new FormControl(d['MRP']),
    Rate:new FormControl(d['Rate']),
    image:new FormControl(d['image']),
    product_name:new FormControl(d['product_name']),
    quantity:new FormControl(d['quantity']),
    short_desc:new FormControl(d['short_desc']),
    status:new FormControl(d['status']),
    userId:new FormControl(d['userId'])
  })
console.log(d)


this.dayats=d
})}

updateStatus(){
  console.log(this.form.value)
  
   this.s1.editOrder(this.data.userid,this.data.id,this.form.value).subscribe((d)=>console.log(d))
   // this.rt.navigate(['/Dashboard/shirts'])
   
  
}

}

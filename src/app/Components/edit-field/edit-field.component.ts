import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MenserviceService } from 'src/app/men/menservice.service';
import { MyprofileComponent } from '../myprofile/myprofile.component';
import {ActivatedRoute} from '@angular/router'
@Component({
  selector: 'app-edit-field',
  templateUrl: './edit-field.component.html',
  styleUrls: ['./edit-field.component.css']
})
export class EditFieldComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<MyprofileComponent>, private service:MenserviceService ,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.onSubmit()
    // this.getData()
    this.funField()
  }

  label=this.data.label
  name=this.data.name
  id=this.data.userId
  fieldType;
funField(){
  if(this.label==="age" || this.label==='mobile'|| this.label==='altMobile' || this.label==='pinCode'){
    this.fieldType='number'
  }
  else{
    this.fieldType='text'
  }
}

  PersonalInfo:FormGroup=new FormGroup({
    firstName:new FormControl(""),
    lastName:new FormControl(""),
    age:new FormControl("",Validators.pattern[0-9]),
    mobile:new FormControl(""),
    altMobile:new FormControl(""),
    email:new FormControl(""),
    address:new FormControl(""),
    state:new FormControl(""),
    pinCode:new FormControl(""),
    district:new FormControl(""),
    image:new FormControl(""),
  })
  editMyprofile=new Myprof();
  onSave(){
const datas={
  label:this.data.name
}
    this.service.editMyProfile(this.data.userId,datas).subscribe((d)=>{
      console.log(d)
    })
  }
  getData(){
    this.service.getProfileDetail(this.data.userId).subscribe((d)=>
  
    this.PersonalInfo=new FormGroup({
      firstName:new FormControl(d['firstName']),
      lastName:new FormControl(d['lastName']),
      age:new FormControl(d['age']),
      mobile:new FormControl(d['mobile']),
      altMobile:new FormControl(d['altMobile']),
      email:new FormControl(d['email']),
      address:new FormControl(d['address']),
      state:new FormControl(d['state']),
      pinCode:new FormControl(d['pinCode']),
      district:new FormControl(d['district']),
      // image:new FormControl(d['image']),
  
    })
    )
  }
  onSubmit(){
//    this.PersonalInfo.setValue({firstName:this.name})
    this.PersonalInfo.controls.firstName.setValue(this.data.name);
    this.PersonalInfo.controls.lastName.setValue(this.data.name);
    this.PersonalInfo.controls.age.setValue(this.data.name);
    this.PersonalInfo.controls.address.setValue(this.data.name);
    this.PersonalInfo.controls.email.setValue(this.data.name);
    this.PersonalInfo.controls.altMobile.setValue(this.data.name);
    this.PersonalInfo.controls.mobile.setValue(this.data.name);
    this.PersonalInfo.controls.state.setValue(this.data.name);
    this.PersonalInfo.controls.pinCode.setValue(this.data.name);
    this.PersonalInfo.controls.district.setValue(this.data.name);
    this.PersonalInfo.controls.state.setValue(this.data.name);
    this.PersonalInfo.controls.image.setValue(this.data.name);

  }
}

export class Myprof {
  firstName:string;
  lastName:string;
  age:number;
  mobile:number;
  altMobile:Number;
  email:string;
  address:string;
  state:string;
  pinCode:string;
  district:string;
  image:string;
}


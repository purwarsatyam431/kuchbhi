import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MenserviceService } from 'src/app/men/menservice.service';
import { Myprof } from '../edit-field/edit-field.component';
import * as moment from 'moment';
import { Moment} from 'moment';
import {MatDatepicker, MatDatepickerModule} from '@angular/material/datepicker';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  constructor(private service:MenserviceService,public rt:Router, private route:ActivatedRoute) { }
  
  ngOnInit(): void {
    this.getData()
  }
  audFileSelected(e){
    if(e.target.files){
      var reader=new FileReader();
      reader.readAsDataURL(e.target.files[0])
      reader.onload=(event:any)=>{
       this.PersonalInfo.value.image=event.target.result;

        //  this.PersonalInfo.controls.image.setValue(event.target.result);
      }
        }
  }
  PersonalInfo:FormGroup=new FormGroup({
    firstName:new FormControl(""),
    lastName:new FormControl(""),
    age:new FormControl(""),
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
    if(this.PersonalInfo.valid===true){
    this.editMyprofile.firstName=this.PersonalInfo.value.firstName;
    this.editMyprofile.lastName=this.PersonalInfo.value.lastName;
    this.editMyprofile.age=this.PersonalInfo.value.age;
    this.editMyprofile.mobile=this.PersonalInfo.value.mobile;
    this.editMyprofile.altMobile=this.PersonalInfo.value.altMobile;
    this.editMyprofile.email=this.PersonalInfo.value.email;
    this.editMyprofile.address=this.PersonalInfo.value.address;
    this.editMyprofile.pinCode=this.PersonalInfo.value.pinCode;
    this.editMyprofile.state=this.PersonalInfo.value.state;
    this.editMyprofile.district=this.PersonalInfo.value.district;
    this.editMyprofile.image=this.PersonalInfo.value.image;
this.service.editMyProfile(this.route.snapshot.params.userId,this.editMyprofile).subscribe((d)=>{
  console.log(d)
this.rt.navigate(['/My-profile'])  
})

  }
    console.log(this.editMyprofile)
  }
  data:any;
getData(){
  console.log(this.route.snapshot.params.userId)

  this.service.getProfileDetail(this.route.snapshot.params.userId).subscribe((d)=>

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

readonly date = new FormControl(moment());
  
setMonthAndYear(normalizedMonthAndYear: Moment, datepicker: MatDatepicker<Moment>) {
  const ctrlValue = this.date.value ?? moment();
  ctrlValue.month(normalizedMonthAndYear.month());
  ctrlValue.year(normalizedMonthAndYear.year());
  this.date.setValue(ctrlValue);
  datepicker.close();
}
}

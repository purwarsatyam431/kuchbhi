import { AfterContentChecked, Component, OnInit } from '@angular/core';
import { FormControl ,FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Myprof } from '../Components/edit-field/edit-field.component';
import { MenserviceService } from '../men/menservice.service';
import { AuthService } from '../services/auth.service';

import { ErrorService } from '../services/error.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit,AfterContentChecked {
ngAfterContentChecked(){
  
}
  constructor(private rt:Router ,private _authService:AuthService, private _err:ErrorService,private men:MenserviceService) { }

  ngOnInit(): void {

  }
form:FormGroup=new FormGroup({
  email:new FormControl("",[Validators.required]),
  password:new FormControl("",[Validators.required])
})

funSubmit(){
  if(this.form.value.email==="satyam_purwar",this.form.value.password==="123qwe"){
    localStorage.setItem("auth", "1")
    this.rt.navigate(["/Dashboard"])

  }
  else{
    alert("Enter valid values")
  }
}
loginMode:boolean=true; 
login(){
this.loginMode=true;
}
signUp(){
  this.loginMode=false;
}
error:string;
errorMessages=this._err.errorsMessages;
signUpForm(){
  const email=this.form.value.email;
  const password=this.form.value.password;
  this._authService.signUp(email,password).subscribe((res)=>{
    this.onSave()
    console.log(res)},
  ((err)=>{
  this.error=err;

  this.hideError=false
// if(!err.error|| !err.error.error){
//   this.error=this.errorMessages['UNKNOWN']
// }else{
//   this.error=this.errorMessages[err.error.error.message]
// }
    console.log(err)
  }))
}
data;
signInForm(){

  const email=this.form.value.email;
  const password=this.form.value.password;
   this._authService.signIn(email,password).subscribe((res)=>{
     console.log(res)
     this.data=res
    localStorage.setItem("UserInfo",JSON.stringify(this.data))
    this.rt.navigate(["/cart"])
    this.men.loginTrue.next('true')
  },err=>{
this.error=err
this.hideError=false
//     this.error=this.errorMessages[err.error.error.message]
   console.log(err)})
   
   
   
 
}
hideError:boolean;
funHide(){
  this.hideError=!this.hideError
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

postMyprofile=new Myprof();
onSave(){
  if(this.PersonalInfo.valid===true){
  this.postMyprofile.firstName=this.PersonalInfo.value.firstName;
  this.postMyprofile.lastName=this.PersonalInfo.value.lastName;
  this.postMyprofile.age=this.PersonalInfo.value.age;
  this.postMyprofile.mobile=this.PersonalInfo.value.mobile;
  this.postMyprofile.altMobile=this.PersonalInfo.value.altMobile;
  this.postMyprofile.email=this.form.value.email;
  this.postMyprofile.address=this.PersonalInfo.value.address;
  this.postMyprofile.pinCode=this.PersonalInfo.value.pinCode;
  this.postMyprofile.state=this.PersonalInfo.value.state;
  this.postMyprofile.district=this.PersonalInfo.value.district;
  this.postMyprofile.image=this.PersonalInfo.value.image;
this.men.postMyProfile(this.postMyprofile).subscribe((d)=>{
console.log(d)
this.rt.navigate(['/My-profile'])  
})

}
  console.log(this.postMyprofile)
}

}

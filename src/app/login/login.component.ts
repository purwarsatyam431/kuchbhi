import { AfterContentChecked, Component, OnInit } from '@angular/core';
import { FormControl ,FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
  this._authService.signUp(email,password).subscribe((res)=>{console.log(res)},
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
    localStorage.setItem("auth","1")
    localStorage.setItem("UserInfo",JSON.stringify(this.data))
    this.rt.navigate(["/Dashboard"])
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

}

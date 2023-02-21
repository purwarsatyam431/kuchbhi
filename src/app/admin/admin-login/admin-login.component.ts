import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  constructor(public rt:Router) { }

  ngOnInit(): void {
  }
  form:FormGroup=new FormGroup({
    email:new FormControl("",[Validators.required]),
    password:new FormControl("",[Validators.required])
  })
  signInForm(){
    if(this.form.value.email==='Admin@Kuchbhi.com' && this.form.value.password==="123qwe"){
      localStorage.setItem("auth",'1')
      this.rt.navigate(['/admin'])
    }
  }
  }
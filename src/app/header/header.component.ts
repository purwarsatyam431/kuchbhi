import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviourService } from '../behaviour.service';
import { MenserviceService } from '../men/menservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
open=true;
  constructor(private s1:MenserviceService,public rt:Router
    ,private behaviourService:BehaviourService
    ) { }
loginTrue:boolean=false;
  ngOnInit(): void {
this.funLogin()
  this.s1.loginTrue.subscribe((d)=>this.loginTrue=d)
  this.funLoginfa()
  this.cardDatafun();
  this.behaviourService.cartSubject.subscribe((d)=>this.cardData=d)
  }
funLogin(){
if(localStorage.getItem("auth")){

  this.loginTrue=true
}
}
funLoginfa(){
  if(localStorage.getItem(null)){
  this.s1.loginTrue.next(false)
  }
  }

logOut(){
  localStorage.removeItem("auth")
  this.s1.loginTrue.next(false)
  this.rt.navigate(["/"])
  
}
cardData:number=0;

  cardDatafun(){
    if(localStorage.getItem('localCart')!=null){
      var cartCount=JSON.parse(localStorage.getItem('localCart'))
      this.cardData=cartCount.length;
      this.behaviourService.cartSubject.next(this.cardData);
      
    }
  }
}

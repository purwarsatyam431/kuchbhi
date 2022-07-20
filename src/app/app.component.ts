import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviourService } from './behaviour.service';
import { MenserviceService } from './men/menservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'kuchbhi';

  events: string[] = [];
  opened: boolean;

  open=true;
  constructor(private s1:MenserviceService,public rt:Router
    ,private behaviourService:BehaviourService
    ) { }
loginTrue:string='false';
  ngOnInit(): void {
this.funLogin()
  this.s1.loginTrue.subscribe((d)=>this.loginTrue=d)
  this.funLoginfa()
  this.cardDatafun();
  this.behaviourService.cartSubject.subscribe((d)=>this.cardData=d)
  }
funLogin(){
  
if(localStorage.getItem("User=>")){

  this.loginTrue='true'
  this.s1.loginTrue.next('true')
}
}
funLoginfa(){
  if(localStorage.getItem(null)){
  this.s1.loginTrue.next('false')
  }
  }

logOut(){
  localStorage.removeItem("User=>")
  localStorage.removeItem("UserInfo")
  this.s1.loginTrue.next('false')
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

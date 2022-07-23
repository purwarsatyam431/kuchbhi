import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { map } from 'rxjs/operators';
import { MenserviceService } from 'src/app/men/menservice.service';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css']
})
export class OrderHistoryComponent implements OnInit {
  
  constructor(private s1Service:MenserviceService,private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.fetchData()
  }
  data:any;
  error:any;
  fetchData(){
    this.s1Service.getMethod("/cart.json").pipe(map(responseData=>{
     // console.log(responseData);
     const empArray=[]
      for(const key in responseData){
        //console.log(responseData[key])
  //      console.warn(responseData.hasOwnProperty(key))
        if(responseData.hasOwnProperty(key)){
          empArray.push({userId:key,...responseData[key]})
      }
      }
      return empArray
  
    })).subscribe((d)=>{this.data=d 
      const sat= JSON.parse(localStorage.getItem("UserInfo"))
    const userEmail=sat.email;
    
  this.datas=  this.data.filter(function(c){
     return c.email===userEmail
     })
     console.log(this.datas)
    }
    ,((error)=>this.error=error))
  
  
  }
  datas=[]

}

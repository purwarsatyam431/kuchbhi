import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { MenserviceService } from 'src/app/men/menservice.service';

@Component({
  selector: 'app-recent-order',
  templateUrl: './recent-order.component.html',
  styleUrls: ['./recent-order.component.css']
})
export class RecentOrderComponent implements OnInit {

  constructor(private s1Service:MenserviceService) { }

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

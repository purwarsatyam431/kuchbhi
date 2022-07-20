import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { MenserviceService } from 'src/app/men/menservice.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  constructor(private s1: MenserviceService) { 
    
   
  }

  data;
  error;
getData(){
this.s1.getMethod(this.s1.Wishlist).subscribe((d=>{
  this.data=d
}),(error=>{
  this.error=error
}))
}
userEmail;
  getDetails(){
  const sat= JSON.parse(localStorage.getItem("UserInfo"))
   this.userEmail=sat.email;
   console.log(sat)   
   console.log(this.userEmail)
   }

fetchData(){
  this.s1.getMethod(this.s1.Wishlist).pipe(map(responseData=>{
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


ngOnInit(): void {
 
  this.getDetails()
  this.fetchData()

}
}
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { AddShirtsComponent } from 'src/app/admin/add-shirts/add-shirts.component';
import { BehaviourService } from 'src/app/behaviour.service';
import { MenserviceService } from 'src/app/men/menservice.service';
import { EditFieldComponent } from '../edit-field/edit-field.component';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent implements OnInit {
  constructor(private s1:MenserviceService, 
    public dialog:MatDialog,public route:ActivatedRoute,
    private behaviour:BehaviourService,
    public rt:Router
    ){}
firstName='Satyam'
  ngOnInit(): void {
    this.fetchData()
  }
  date=new Date();
  funEditMode(label,val,userId){
    this.dialog.open(EditFieldComponent,{data:{label:label,name:val,userId:userId}}).afterClosed().subscribe(d=>
    this.fetchData()
 )
      }
      totalInfo;
      info;
      error;
      userEmail:string='';
      fetchData(){
  this.s1.getMyProfile().pipe(map(responseData=>{
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

  })).subscribe((d)=>{this.totalInfo=d 
    const sat= JSON.parse(localStorage.getItem("UserInfo"))
this.info=  this.totalInfo.filter(function(c){
   return c.email===sat.email
   }

   )

  }
  ,((error)=>this.error=error))
  

}


remote(info){
console.log(info)
this.rt.navigate(["/edit-Profile",info])
}
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { BehaviourService } from 'src/app/behaviour.service';
import { MenserviceService } from 'src/app/men/menservice.service';
import { AddShirtsComponent } from '../add-shirts/add-shirts.component';
import { DeclarationComponent } from '../declaration/declaration.component';

@Component({
  selector: 'app-womenwears',
  templateUrl: './womenwears.component.html',
  styleUrls: ['./womenwears.component.css']
})
export class WomenwearsComponent implements OnInit {

  constructor(private s1Service:MenserviceService,private _formBuilder: FormBuilder

,    public dialog:MatDialog,public route:ActivatedRoute,
    private behaviour:BehaviourService,
    public rt:Router
    ) { }

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

    
 
    }
    ,((error)=>this.error=error))
  
  
  }
  funEditMode(userid,id){
    this.dialog.open(DeclarationComponent,{data:{userid,id}}).afterClosed().subscribe(d=>this.fetchData())
    console.log(id)

      }



}

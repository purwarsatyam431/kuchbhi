import {HttpClient} from '@angular/common/http';
import {Component, ViewChild, AfterViewInit, OnInit, AfterContentChecked} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { BehaviourService } from 'src/app/behaviour.service';
import { MenserviceService } from 'src/app/men/menservice.service';
import { Products } from 'src/app/men/products';
import { AddShirtsComponent } from '../add-shirts/add-shirts.component';

@Component({
  selector: 'app-menswears',
  templateUrl: './menswears.component.html',
  styleUrls: ['./menswears.component.css']
})

export class  MenswearsComponent implements OnInit,AfterContentChecked{
  ngAfterContentChecked(){
    this.fetchData() 
  }ngOnInit(){
   this.fetchData()
  }
  constructor(private s1:MenserviceService,public dialog:MatDialog,private behaviour:BehaviourService,
    public rt:Router){}
  data=[];
errors;


col=['image','product_name','MRP','Rate','quantity','userId']

fetchData(){
  this.s1.getMenPant().pipe(map(responseData=>{
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
  })).subscribe((d)=>this.data=d,((error)=>this.errors=error))
}
editMode:string='editPant'
openDialog(){
this.dialog.open(AddShirtsComponent)
this.behaviour.editMode.next('Addpant')
}
delete(id){
  this.s1.deletePnt(id).subscribe((d)=>console.log(d))
}
funEditPntMode(){
  this.behaviour.editMode.next(this.editMode)
}
funView(id){
  this.rt.navigate(['/detail',id])
    }
  
  }


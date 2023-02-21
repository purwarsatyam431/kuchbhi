import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { map } from 'rxjs/operators';
import { MenserviceService } from '../men/menservice.service';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.css']
})
export class CareerComponent implements OnInit {

  constructor(private men:MenserviceService) { }
data:any=[];
error;
searchText:string='';
filter:boolean=false;

vacancy:any;
filterTrue(){
  this.filter=!this.filter
}
search(value: string): void {
  // this.BasicInfo = this.BasicInfo.filter((val:any) => val.name.toLowerCase().includes(value));
  console.log(value)
}
  ngOnInit(): void {
    this.fetchData()
    this.jobvacancy()
  }
  form:FormGroup=new FormGroup({
    Name:new FormControl("",Validators.required),
    Email:new FormControl("",Validators.required),
    AltContact:new FormControl(""),
    Contact:new FormControl("",Validators.required),
    Experiance:new FormControl("",),
    Doj:new FormControl("",Validators.required),
    JobType:new FormControl("",Validators.required),
    JobVaccany:new FormControl(""),
    Position:new FormControl("",Validators.required),
    AddInfo:new FormControl("")
  })

  submit(){
    console.log(this.form.value)
  }
  fetchData(){
    this.men.getMethod(this.men.Jobvacancy).pipe(map(responseData=>{
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
    console.log(this.data)}
    
    ,((error)=>this.error=error))
  }

  jobvacancy(){
    this.men.getMethod(this.men.Jobvacancy).pipe(map(responseData=>{
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
     var uniq = {};
      this.vacancy = this.data.filter(obj => !uniq[obj.PostName] && (uniq[obj.PostName] = true));
      console.log('arrFiltered', this.vacancy);


    }
    ,((error)=>this.error=error)) 
  }
}

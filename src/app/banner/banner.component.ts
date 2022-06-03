import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { MenserviceService } from '../men/menservice.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  constructor(private men:MenserviceService) { }
Mendata;
shirts;
errorData
errorPantData;
pant;
ngOnInit(): void {

this.fetchData()
this.fetchData2()
  }

  fetchData(){
    this.men.getMenShirt().pipe(map(responseData=>{
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
    })).subscribe((d)=>this.shirts=d,((error)=>this.errorData=error))
  }

  fetchData2(){
    this.men.getMenPant().pipe(map(responseData=>{
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
    })).subscribe((d)=>this.pant=d,((error)=>this.errorPantData=error))
  }


}

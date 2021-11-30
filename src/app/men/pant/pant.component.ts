import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { MenserviceService } from '../menservice.service';

@Component({
  selector: 'app-pant',
  templateUrl: './pant.component.html',
  styleUrls: ['./pant.component.css']
})
export class PantComponent implements OnInit {

  constructor(private men:MenserviceService) { }
pants;
errorData;
  ngOnInit(): void {
  this.fetchData()
  }

  fetchData(){
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
    })).subscribe((d)=>this.pants=d,((error)=>this.errorData=error))
  }
}

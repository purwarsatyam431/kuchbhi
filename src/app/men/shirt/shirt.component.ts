import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { MenserviceService } from '../menservice.service';

@Component({
  selector: 'app-shirt',
  templateUrl: './shirt.component.html',
  styleUrls: ['./shirt.component.css']
})
export class ShirtComponent implements OnInit {
errorData;
shirts;
  constructor(private men:MenserviceService) { }

  ngOnInit(): void {
  this.fetchData()
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
}

import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { MenserviceService } from 'src/app/men/menservice.service';

@Component({
  selector: 'app-admin-career-list',
  templateUrl: './admin-career-list.component.html',
  styleUrls: ['./admin-career-list.component.css']
})
export class AdminCareerListComponent implements OnInit {

  constructor(private men:MenserviceService) { }

  ngOnInit(): void {
    this.fetchData()
  }
  data;
  error;
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
    })).subscribe((d)=>this.data=d,((error)=>this.error=error))
  }
}

import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MenserviceService } from 'src/app/men/menservice.service';
import  {map} from 'rxjs/operators'
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-admin-career',
  templateUrl: './admin-career.component.html',
  styleUrls: ['./admin-career.component.css']
})
export class AdminCareerComponent implements OnInit {

  constructor(private men:MenserviceService) { }

  ngOnInit(): void {
    this.fetchData()
  }
  error;
  form:FormGroup=new FormGroup({
    PostName:new FormControl("",Validators.required),
    Location:new FormControl("",Validators.required),
    Experiance:new FormControl(""),
    describe:new FormControl("",Validators.required),
    skill:new FormControl("",),
  })
  submit(){
    console.log(this.form.value)
    this.men.postMethod(this.men.Jobvacancy,this.form.value).subscribe((d)=>{
console.log(d)
this.fetchData()
    },error=>{
      this.error=error
    })
  }

  data;
  errors;
  dataSource = new MatTableDataSource<any>();
@ViewChild(MatPaginator) paginator: MatPaginator;
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
    })).subscribe((d)=>
    {
      this.dataSource = new MatTableDataSource<any>(d)
      this.dataSource.paginator = this.paginator;
            this.data = this.dataSource.connect();
    },((error)=>this.errors=error))
  }

  delete(d){
    this.men.deletepublic('/jobvacancy',d).subscribe((d)=>{
      console.log(d)
this.fetchData()
    })
  }


  // filter
  searchText:string='';
filter:boolean=false;
filterTrue(){
  this.filter=!this.filter
}
search(value: string): void {
  // this.BasicInfo = this.BasicInfo.filter((val:any) => val.name.toLowerCase().includes(value));
  console.log(value)
}
applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();

  if (this.dataSource.paginator) {
    this.dataSource.paginator.firstPage();
  }
}
}

import { AfterViewChecked, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { BehaviourService } from 'src/app/behaviour.service';
import { DetailComponent } from 'src/app/men/detail/detail.component';
import { MenserviceService } from 'src/app/men/menservice.service';
import { AddShirtsComponent } from '../add-shirts/add-shirts.component';

@Component({
  selector: 'app-shirts',
  templateUrl: './shirts.component.html',
  styleUrls: ['./shirts.component.css']
})
export class ShirtsComponent implements OnInit {
  ngOnInit(){
    this.fetchData()
   
  }
  constructor(private s1:MenserviceService, 
    public dialog:MatDialog,public route:ActivatedRoute,
    private behaviour:BehaviourService,
    public rt:Router
    ){}
  data:any=[];
  dataSource = new MatTableDataSource<any>();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
errors;
editMode:string='true';
col=['image','product_name','MRP','Rate','quantity','userId']

fetchData(){
  this.s1.getMenShirt().pipe(map(responseData=>{
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
  })).subscribe((d)=>{
    this.dataSource = new MatTableDataSource<any>(d)
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  },((error)=>this.errors=error))
}
openDialog(){
  this.dialog.open(AddShirtsComponent).afterClosed().subscribe((d)=>
  {
  this.fetchData()
  console.log(this.fetchData())
})
  this.behaviour.editMode.next('false')
  }
delete(id){
  if(confirm("Do you Wana delete record")){
    console.log(id)
    this.s1.delete(id).subscribe((d)=>
    this.fetchData())
    
  }
  
  }
  funEditMode(id){
this.dialog.open(AddShirtsComponent,{data:id}).afterClosed().subscribe(d=>this.fetchData())
console.log(id)
    this.behaviour.editMode.next(this.editMode)
  }
  funView(id){
this.rt.navigate(['/detail',id])
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

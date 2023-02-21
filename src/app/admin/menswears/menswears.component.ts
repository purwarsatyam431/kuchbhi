import {HttpClient} from '@angular/common/http';
import {Component, ViewChild, AfterViewInit, OnInit, AfterContentChecked, AfterContentInit} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
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

export class  MenswearsComponent implements OnInit{
  
  ngOnInit(){
   this.fetchData()
  }
  constructor(private s1:MenserviceService,public dialog:MatDialog,private behaviour:BehaviourService,
    public rt:Router){}
  data=[];
  dataSource = new MatTableDataSource<any>();

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
  })).subscribe((d)=>{
  this.dataSource = new MatTableDataSource<any>(d)
  this.dataSource.paginator = this.paginator;
  this.dataSource.sort = this.sort;
}
  ,((error)=>{this.errors=error
  console.log(error)
  }))
}
editMode:string='editPant'
openDialog(){
this.dialog.open(AddShirtsComponent).afterClosed().subscribe((d)=>this.fetchData())
this.behaviour.editMode.next('Addpant')

}
delete(id){
  if(confirm("Do you want detele this product?")){
  this.s1.deletePnt(id).subscribe((d)=>this.fetchData())
}
}
funEditPntMode(id){
  this.dialog.open(AddShirtsComponent,{data:id}).afterClosed().subscribe(d=>this.fetchData())
  this.behaviour.editMode.next(this.editMode)
}
funView(id){
  this.rt.navigate(['/detail',id])
    }
  
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;
    ngAfterViewInit() {
      // console.log(this.dataSource)
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
  
      if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
      }
    }
  }


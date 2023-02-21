import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
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
  obs:any;
  constructor(private s1Service:MenserviceService,private _formBuilder: FormBuilder

,    public dialog:MatDialog,public route:ActivatedRoute,
    private behaviour:BehaviourService,
    public rt:Router,private changeDetectorRef: ChangeDetectorRef
    ) { }

  ngOnInit(): void {
    this.fetchData()
    // this.changeDetectorRef.detectChanges();
    // this.dataSource.paginator = this.paginator;
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
  
    })).subscribe((d)=>{
      this.dataSource = new MatTableDataSource<any>(d)
this.dataSource.paginator = this.paginator;
      this.obs = this.dataSource.connect();
      console.log(this.obs)
      console.log('data',this.data)
    }
    ,((error)=>this.error=error))
  
  
  }
  funEditMode(userid,id){
    this.dialog.open(DeclarationComponent,{data:{userid,id}}).afterClosed().subscribe(d=>this.fetchData())
    console.log(id)

      }

// paginator
dataSource = new MatTableDataSource<any>();
@ViewChild(MatPaginator) paginator: MatPaginator;
// @ViewChild(MatSort) sort: MatSort;


}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { MenserviceService } from '../menservice.service';
import {switchMap}from 'rxjs/operators'
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  constructor(private men:MenserviceService,
    private route:ActivatedRoute,
    private router:Router) { }
details;
ss;

  ngOnInit(): void {
    
     this.details=this.route.paramMap.pipe(
       switchMap((params:ParamMap)=>
       this.men.getPantDetail(params.get('id')))
     )


    this.ss=this.route.paramMap.pipe(
      switchMap((params:ParamMap)=>
      this.men.getMenShirtDetail(params.get('id')))
    )
  }

}

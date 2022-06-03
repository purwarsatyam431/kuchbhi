import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { map } from 'rxjs/operators';
import { BehaviourService } from 'src/app/behaviour.service';
import { SnakComponent } from 'src/app/snak/snak.component';
import { MenserviceService } from '../menservice.service';

@Component({
  selector: 'app-pant',
  templateUrl: './pant.component.html',
  styleUrls: ['./pant.component.css']
})
export class PantComponent implements OnInit {

  constructor(private men:MenserviceService,private behaviourService:BehaviourService,private _snackBar: MatSnackBar) { }
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
    })).subscribe((d)=>this.pants=d,((error)=>{this.errorData=error
    console.log(error)}))
  }

  minus(Product){
    if(Product.quantity!=0){
      Product.quantity-=1;
    }
    }
    plus(Product){
    
    if(Product.quantity!=10){
    Product.quantity+=1;
    }
    }


    itemCart:any[];
    addCart(category){
    
    let cartDataNull=localStorage.getItem('localCart');
    if(cartDataNull == null){
      let storeDataGet:any=[];
      storeDataGet.push(category);
      localStorage.setItem('localCart',JSON.stringify(storeDataGet));
    }
    else{
      var id = category.userId;
      let index:number = -1;
      this.itemCart = JSON.parse(localStorage.getItem('localCart'))
      for(let i=0; i<this.itemCart.length; i++ ){
        if(parseInt(id) === parseInt(this.itemCart[i].userId)){
          this.itemCart[i].quantity=category.quantity;
          index = i;
          break;
        }
      }
    if(index == -1){
      this.itemCart.push(category);
      localStorage.setItem('localCart',JSON.stringify(this.itemCart));
    }
    else{
      localStorage.setItem('localCart',JSON.stringify(this.itemCart));
    }

  }
  this.cardDatanfun()
  this.openSnackBar() 
    }
    cardData:number=0;

  cardDatanfun(){
    if(localStorage.getItem('localCart')!=null){
      var cartCount=JSON.parse(localStorage.getItem('localCart'))
      this.cardData=cartCount.length;
      this.behaviourService.cartSubject.next(this.cardData);
      
    }
  }
  openSnackBar() {
    this._snackBar.openFromComponent(SnakComponent, {
      duration: 2* 1000,
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
        panelClass:['blue']
     
    });
  }

}

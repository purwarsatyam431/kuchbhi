import { Component, HostListener, OnInit } from '@angular/core';
import { MenserviceService } from '../men/menservice.service';
import Swal from 'sweetalert2';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { map } from 'rxjs/operators';
import { BehaviourService } from '../behaviour.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private publicService:MenserviceService ,private behaviourService:BehaviourService) { }

  ngOnInit(): void {
    this.behaviourService.cartSubject.subscribe((d)=>this.cardData=d)
    this.CardDetails()
    this.getDetails()

  }
  getCartDetails:any=[]
  total:any=[];
  subTotal:any=[]
CardDetails(){
if(localStorage.getItem('localCart')){
this.getCartDetails=JSON.parse(localStorage.getItem('localCart'));

console.log(this.getCartDetails)
this.getTotal()
}

}
getTotal(){
  if(localStorage.getItem('localCart')){
    this.getCartDetails=JSON.parse(localStorage.getItem('localCart'));
  this.total=this.getCartDetails.reduce(function(acc,val){
    return (val.Rate*val.quantity)+acc
  },0)
  }
  console.log(this.total)  
 // this.subtotal()
}
coupon:any='';
subtotal(){
  if(this.coupon==='Satyam20'){
    this.subTotal=this.total-(this.total*20/100)
    this.invalidCoupan=""
  }
  else if(this.coupon==='Satyam40'){
    this.subTotal=this.total-(this.total*40/100)
    this.invalidCoupan=""
  }
  else if(this.coupon===''){
    this.subTotal=this.total
    this.invalidCoupan=""
  }
  else{
    this.subTotal=this.total
    this.invalidCoupan="Sorry Your coupon is not valid."
  }

}

invalidCoupan=""

// PaymentGateway
options = {
  "key": "rzp_test_xCnEMt9LziD30N" //rzp_test_xCnEMt9LziD30N //rzp_live_SyNDfGPLs4eqQG
,  "amount": '0',
  "currency": "INR",
  "name": "Satyam Purwar",
  "description": "",
  "image": "this.logo",
  //"order_id": "this.uuid", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1  order_9A33XWu170gUtm
  // "callback_url": "https://eneqd3r9zrjok.x.pipedream.net/",
  "handler": function (response: any) {
    var event = new CustomEvent("payment.success",
      {
        detail: response,
        bubbles: true,
        cancelable: true
      }
    );
    window.dispatchEvent(event);
  },
  "prefill": {
      "name":"this.Customername",
      "email":"this.Customeremail",
      "contact": ""
  },
  "notes": {
      "address": "Razorpay Corporate Office"
  },
  "theme": {
      "color": "#3399cc"
  }
};

  
rzp1;






pay(i){

this.options.amount=i

this.rzp1 =  this.publicService.nativeWindow.Razorpay(this.options)
this.rzp1.open()  


this.rzp1.on('payment.failed', function (response: any) {
  this.message = "failed";
  // Todo - store this information in the server
  console.log(response.error.code);
  console.log(response.error.description);
  console.log(response.error.source);
  console.log(response.error.step);
  console.log(response.error.reason);
  console.log(response.error.metadata.order_id);
  console.log(response.error.metadata.payment_id);
  this.pp(this.package_id,response.detail.razorpay_payment_id,this.message)
  Swal.fire({icon: 'error', title:response.detail.message ,text:response.detail.error_code});

  //this.error = response.error.reason;
}

);

this.amunt=Math.floor(i/100)
}
amunt
message;
//val=Math.floor(this.options.amount/100)
@HostListener('window:payment.success', ['$event'])
onPaymentSuccess(event: any): void  {
this.message = "success";

//  alert(this.message)
// alert(this.options.prefill.name)
// alert(this.options.prefill.contact)
// alert(this.options.prefill.email)
console.log(event.detail.razorpay_payment_id)//pay_JUbBxDdSWtcVsG
console.log(event)
//his.pp(this.package_id,event.detail.razorpay_payment_id,this.message)
this.form.setValue({email: this.email, CardDetails: this.getCartDetails,payment_Id:event.detail.razorpay_payment_id,payAmount:this.amunt,orderType:'ordered'})
this.publicService.postCart(this.form.value).subscribe((d)=>{
  console.log("success")
  this.clearLocalCart()
})
Swal.fire({icon: 'success', title: this.message,text:event.detail.razorpay_payment_id});


}

email;
sat
getDetails(){
 this.sat= JSON.parse(localStorage.getItem("UserInfo"))
this.email=this.sat.email;
console.log(this.sat)
console.log(this.email)

}
form:FormGroup=new FormGroup({
email:new FormControl("",Validators.required),
CardDetails:new FormControl("",[Validators.required]),
payment_Id:new FormControl("",[Validators.required]),
payAmount:new FormControl("",[Validators.required]),
orderType:new FormControl("",[Validators.required]),
})

postCartData(){
  if(localStorage.getItem("localCart")){
 //   this.form.setValue({email: this.email, CardDetails: this.getCartDetails,payment_Id:})
  }else{
    this.form.setValue({email: this.email, CardDetails: localStorage.getItem("localCart")})
  }

  this.publicService.postCart(this.form.value).subscribe(d=>{
    console.log(d)
  })
}


cart;
errorData;
getCartData(){
  this.publicService.GetCart().pipe(map(responseData=>{
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
  })).subscribe((response)=>this.cart=response,((error)=>this.errorData=error))

  const CartData=[]
  for(const key in this.cart.CardDetails){
    //console.log(responseData[key])
//      console.warn(responseData.hasOwnProperty(key))
    if(this.cart.CardDetails.hasOwnProperty(key)){
      this.getCartDetails=CartData.push({userId:key,...this.cart.CardDetails[key]})
      
  }
  return this.getCartDetails
  }
}
clearLocalCart(){
  if(localStorage.getItem('localCart')){
this.getCartDetails=localStorage.removeItem('localCart');
this.behaviourService.cartSubject.next(0);
    this.getTotal()
    this.subTotal()
  }
}
delete(item){
 
    console.log(item);
    if(localStorage.getItem('localCart')){
      this.getCartDetails=JSON.parse(localStorage.getItem('localCart'));
      for(let i=0;i<this.getCartDetails.length;i++){
        if(this.getCartDetails[i].userId===item){
          this.getCartDetails.splice(i,1);
          localStorage.setItem('localCart',JSON.stringify(this.getCartDetails));
          this.cardDatafun()
          this.getTotal()
          this.subTotal()

        }
      }
    }
    
}
cardData:number=0;
cardDatafun(){
  if(localStorage.getItem('localCart')!=null){
    var cartCount=JSON.parse(localStorage.getItem('localCart'))
    this.cardData=cartCount.length;
    this.behaviourService.cartSubject.next(this.cardData);
    
  }
  }

plus(id,quantity){
  for(let i=0; i<this.getCartDetails.length;i++){
    if(this.getCartDetails[i].userId===id){
      if(quantity!=10){
       this.getCartDetails[i].quantity=parseInt(quantity)+1;
    }
  }
}
localStorage.setItem('localCart',JSON.stringify(this.getCartDetails))
this.getTotal();
this.subTotal()

}


minus(id,quantity){
  for(let i=0; i<this.getCartDetails.length;i++){
    if(this.getCartDetails[i].userId===id){
      if(quantity!=1){
       this.getCartDetails[i].quantity=parseInt(quantity)-1;
    }
  }

}
localStorage.setItem('localCart',JSON.stringify(this.getCartDetails))
this.getTotal();
this.subTotal()
}
}


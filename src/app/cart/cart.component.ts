import { Component, HostListener, OnInit } from '@angular/core';
import { MenserviceService } from '../men/menservice.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private publicService:MenserviceService) { }

  ngOnInit(): void {
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
  }
  else if(this.coupon==='Satyam40'){
    this.subTotal=this.total-(this.total*40/100)
  }
  
  else{
    this.subTotal=this.total
  }

}



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

//this.amunt=Math.floor(i/100)
}

message;
//val=Math.floor(this.amunt/100)
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

}


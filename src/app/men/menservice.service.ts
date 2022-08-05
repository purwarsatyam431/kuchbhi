import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ErrorService } from '../services/error.service';
import { Products } from './products';

function _window() : any {
 
  return window;
}
@Injectable()
export class MenserviceService {
  get nativeWindow() : any {
    return _window();
  }


url="https://kuchbhi-5218a-default-rtdb.firebaseio.com";
Wishlist='/wishlist.json';
Jobvacancy='/jobvacancy.json'


errorData={}

  constructor(private http:HttpClient, private _err:ErrorService) { }


  getMenPant():Observable<Products[]>{
return this.http.get<Products[]>(this.url+'/Men-trackPant.json',{responseType:"json"})
  }

  getMenShirt():Observable<Products[]>{
    return this.http.get<Products[]>(this.url+'/Men-shirt.json',{responseType:"json"}).pipe
    (catchError(this.handleError))
      }

getPantDetail(id:string):Observable<Products[]>{
  return this.http.get<Products[]>(this.url+'/Men-trackPant/'+id+'.json')
}
getMenShirtDetail(Userid:string):Observable<Products[]>{
  return this.http.get<Products[]>("https://kuchbhi-5218a-default-rtdb.firebaseio.com/Men-shirt/"+Userid+'.json')
}

postData(data:Products):Observable<Products>{
  return this.http.post<Products>("https://kuchbhi-5218a-default-rtdb.firebaseio.com/Men-shirt.json",data).pipe(
    catchError(this.handleError)
  )
}
postCart(data:any):Observable<any>{
return this.http.post<any>(this.url+"/cart.json",data).pipe(
  catchError(this.handleError)
)
}
GetCart():Observable<any>{
  return this.http.get<any>(this.url+"/cart.json").pipe(
    catchError(this.handleError)
  )
  }

delete(id){
  return this.http.delete("https://kuchbhi-5218a-default-rtdb.firebaseio.com/Men-shirt"+'/'+id+'.json')
}
editShirt(id:string,data:Products):Observable<Products>{
  return this.http.put<Products>("https://kuchbhi-5218a-default-rtdb.firebaseio.com/Men-shirt"+'/'+id+'.json',data)
}

postPantData(data:Products):Observable<Products>{
  return this.http.post<Products>("https://kuchbhi-5218a-default-rtdb.firebaseio.com/Men-trackPant.json",data).pipe(
    catchError(this.handleError)
  )
}


deletePnt(id){
  return this.http.delete("https://kuchbhi-5218a-default-rtdb.firebaseio.com/Men-trackPant"+'/'+id+'.json')
}
getMenPantDetail(Userid:string):Observable<Products[]>{
  return this.http.get<Products[]>("https://kuchbhi-5218a-default-rtdb.firebaseio.com/Men-trackPant/"+Userid+'.json')
}

editpant(id:string,data:Products):Observable<Products>{
  return this.http.put<Products>("https://kuchbhi-5218a-default-rtdb.firebaseio.com/Men-trackPant"+'/'+id+'.json',data)
}
getProfileDetail(Userid:string):Observable<any>{
  return this.http.get<any>("https://kuchbhi-5218a-default-rtdb.firebaseio.com/profile/"+Userid+'.json')
}

getMyProfile():Observable<any>{
  return this.http.get<any>("https://kuchbhi-5218a-default-rtdb.firebaseio.com/profile.json").pipe(
    catchError(this.handleError)
  )
  }
  getMethod(url):Observable<any>{
    return this.http.get(this.url+url).pipe(catchError(this.handleError))
      }
  postMethod(url,data:any):Observable<any>{
return this.http.post(this.url+url+'/',data).pipe(catchError(this.handleError))
  }

  deletepublic(url,id){
    return this.http.delete(this.url+url+'/'+id+'.json')
  }

postMyProfile(data:any):Observable<any>{
  return this.http.post<any>(this.url+"/profile.json",data).pipe(
    catchError(this.handleError)
  )
  }
  editMyProfile(id:string,data:any):Observable<any>{
    return this.http.patch<any>(this.url+"/profile/"+id+".json",data).pipe(
      catchError(this.handleError)
    )
    }
    editputMyProfile(id:string,data:any):Observable<any>{
      return this.http.put<any>(this.url+"/profile/"+id+".json",data).pipe(
        catchError(this.handleError)
      )
      }
//OrderConFirmation
getOrderDetail(Id:string,Userid:string):Observable<any>{
  return this.http.get<any>("https://kuchbhi-5218a-default-rtdb.firebaseio.com/cart/"+Id+"/CardDetails/"+Userid+'.json')
}

editOrder(Id:string,Userid:string,data:any):Observable<any>{
  return this.http.patch<any>("https://kuchbhi-5218a-default-rtdb.firebaseio.com/cart/"+Id+"/CardDetails/"+Userid+'.json',data)
}

private handleError(error: HttpErrorResponse) {
  if (error.error instanceof ErrorEvent) {

   

    console.error('An error occurred:', error.error.message);
  } else {

   
    console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
  }

  

  this.errorData = {
    errorTitle: 'Oops! Request for document failed',
    errorDesc: 'Something bad happened. Please try again later.'
  };
  return throwError(this.errorData);

}
loginTrue=new Subject<boolean>()
opened=new BehaviorSubject<boolean>(false)
}

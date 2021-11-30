import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ErrorService } from '../services/error.service';
import { Products } from './products';

@Injectable({
  providedIn: 'root'
})
export class MenserviceService {
url="https://kuchbhi-5218a-default-rtdb.firebaseio.com";


errorData={}

  constructor(private http:HttpClient, private _err:ErrorService) { }


  getMenPant():Observable<Products[]>{
return this.http.get<Products[]>(this.url+'/Men-trackPant.json',{responseType:"json"}).pipe(
  catchError(this.handleError)
)
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

}

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, Subject, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { AuthResponse } from '../appInterface/auth-response.interface';
import { ErrorService } from './error.service';
import {user} from '../appInterface/user.model'
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient,private _err:ErrorService) { }
apiKey=" AIzaSyBIiyp6Yf-neRzHf9uI5W2WbkZq6CxefLc"
User=new Subject<user>()

  signUp(email,password):Observable<AuthResponse>{
return this.http.post<AuthResponse>("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key="+this.apiKey,{
  email:email,
  password:password,
  returnSecureToken:true
}).pipe(catchError(err=>{
  return this._err.handleError(err)
}),tap(res=>{this.authenticatatedUser(res.email,res.localId,res.idToken,+res.expiresIn)})

)
  }

  signIn(email,password){
    return this.http.post<AuthResponse>
    ("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key="+this.apiKey
    ,{
        email:email,
        password:password,
        returnSecureToken:true
  }).pipe(catchError(err=>{
    return this._err.handleError(err)
  }),tap(res=>{this.authenticatatedUser(res.email,res.localId,res.idToken,+res.expiresIn)})
  )
  }
private authenticatatedUser(email,userId,token,expiresIn){
   const expirationDate=new Date(new Date().getTime() +expiresIn*1000);
  const User=new user(email,userId,token,expirationDate)
console.log(User)
  this.User.next(User)
}


}

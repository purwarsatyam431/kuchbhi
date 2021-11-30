import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor() { }

handleError(err:HttpErrorResponse){
  if(!err.error|| !err.error.error){
  //  this.error=this.errorMessages['UNKNOWN']
  return throwError('UNKNOWN')
  }else{
//    this.error=this.errorMessages[err.error.error.message]
return throwError(this.errorsMessages[err.error.error.message])
  }
}

  errorsMessages={
    UNKNOWN:'An Unknown Error is Occurred',
    EMAIL_EXISTS:'The email address is already in use by another account.',
    OPERATION_NOT_ALLOWED:'Password sign-in is disabled for this project.',
    TOO_MANY_ATTEMPTS_TRY_LATER:'We have blocked all requests from this device due to unusual activity. Try again later.',
    EMAIL_NOT_FOUND:'There is no user record corresponding to this identifier. The user may have been deleted.',
INVALID_PASSWORD:'The password is invalid or the user does not have a password.',
USER_DISABLED: 'The user account has been disabled by an administrator.',
ADMIN_ONLY_OPERATION:'as',
INVALID_EMAIL:'The email is invalid.',
WEAK_PASSWORD: 'The password must be 6 characters long or more',
MISSING_PASSWORD:'Enter Password'

  }
}

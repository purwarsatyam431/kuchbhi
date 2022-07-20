import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BehaviourService {

  constructor() { }
  editMode=new BehaviorSubject<string>('')
  cartSubject=new BehaviorSubject<any>('');
}

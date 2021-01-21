import { Injectable } from '@angular/core';
declare let alertify:any;

@Injectable()
export class AlertifyService {

  constructor() { }
  success(messaje:string):string{
   return alertify.success(messaje);
  }
}

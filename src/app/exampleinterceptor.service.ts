import { HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ExampleinterceptorService {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler):Observable<HttpEvent<any>> {
     const clonedRequest = req.clone();
     
     return next.handle(clonedRequest).pipe(catchError((e) => {
      console.log(e.error.error.message);
      console.log('test');
      return throwError(e);
   })); 
    }


}

import {
    HttpErrorResponse,
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest
  } from '@angular/common/http';
  import { Injectable } from '@angular/core';
  import { Observable, throwError } from 'rxjs';
  import { catchError } from 'rxjs/operators';
  
  @Injectable({
    providedIn: 'root',
  })
  export class TokenInterceptorService implements HttpInterceptor {
    constructor() {}
  
    intercept(request: HttpRequest<any>,next: HttpHandler): Observable<HttpEvent<any>> {
      request = request.clone({
        setHeaders: {
          Authorization: 'Bearer ' +  localStorage.getItem('token'),
          'Content-Type': 'application/json'
        },
      });
      return next.handle(request).pipe(
        catchError((err) => {
          if (err instanceof HttpErrorResponse) {
            if (err.status === 401) {
              console.log('401 error- unauthorized');
            }
            if (err.status === 0) {
              console.log('500 error -internal server error');
            }
          }
          return throwError(err);
        })
      );
    }
  }
import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { HttpService } from '../service/http.service';
import { Router } from '@angular/router';

@Injectable()
export class RefreshTokenInterceptor implements HttpInterceptor {

  constructor(private http: HttpService, private router: Router){

  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(request).catch((errorResponse: HttpErrorResponse) => {

      const error = (typeof errorResponse.error !== 'object') ? JSON.parse(errorResponse.error) : errorResponse.error;
      if(errorResponse.status === 401 && error.error === 'token_expired')
      {
        this.http.ApiPost('refresh', {}).toPromise().then((response:any) => {

          localStorage.setItem('token', response.token);
          const req = request.clone({ setHeaders : { 'Authorization' : 'Bearer ' + response.token } });

          return next.handle(req);
        })
      }
      else if(errorResponse.status === 400 && ( error.error || error[0] ) === 'token_expired')
      {
        this.router.navigate(['']);
      }

      return Observable.throw(errorResponse);
    });

  }
}

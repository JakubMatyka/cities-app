import {Injectable} from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('intercepted request...');

    const authReq = req.clone({ headers: req.headers.set('X-Mashape-Key', '6cftyrkeh6mshc261wuzbgkISMG1p1SdDWSjsn8LE9IEhu0n29')});

    return next.handle(authReq);
  }
}

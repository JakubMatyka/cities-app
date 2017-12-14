import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apiUrl } from '../../config/api-url.config';
import { Currency } from '../../interfaces/currency';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class ConverterService {

  private url: string = apiUrl.currency;

  constructor(private http: HttpClient) { }

  convertCurrency(obj: Currency): Observable<any> {
    return this.http.get(`${this.url}/?from=${obj.from}&from_amount=${obj.fromAmount}&to=${obj.to}`)
      .map((data: any) => data)
      .catch(err => Observable.throw(new Error(err.status)))
      .share();
  }
}

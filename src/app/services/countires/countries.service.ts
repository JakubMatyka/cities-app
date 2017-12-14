import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/share';
import { Country } from '../../interfaces/country';
import {apiUrl} from '../../config/api-url.config';

@Injectable()
export class CountriesService {

  private url = apiUrl.countries;

  constructor(private http: HttpClient) { }

  getAllCountries(): Observable<Country[]> {
    return this.http
      .get(`${this.url}/all`)
      .map((data: Country[]) => data)
      .share();
  }

  getCountryByName(name: string): Observable<Country[]> {
    return this.http
      .get(`${this.url}/name/${name}`)
      .map((data: Country[]) => data)
      .share();
  }
}

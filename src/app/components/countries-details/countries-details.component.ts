import { Component, OnInit, Input } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countires/countries.service';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/first';

@Component({
  selector: 'app-countries-details',
  templateUrl: './countries-details.component.html',
  styleUrls: ['./countries-details.component.scss']
})
export class CountriesDetailsComponent implements OnInit {

  public showSpinner = true;

  @Input() country$: Observable<any>;
  @Input() countryObj: Country;

  constructor(private countriesService: CountriesService,
              private route: ActivatedRoute,
              private location: Location) {}

  ngOnInit() {
    this.getCountry();
  }

  getCountry(): any {
    const name = this.route.snapshot.paramMap.get('name');
    this.country$ = this.countriesService.getCountryByName(name);
    this.country$.first().subscribe((item: Country) => {
      this.showSpinner = false;
      return this.countryObj = item[0];
    });
  }

  goBack(): void {
    this.location.back();
  }
}

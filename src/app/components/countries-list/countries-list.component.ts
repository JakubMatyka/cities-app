import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import { CountriesService } from '../../services/countires/countries.service';
import { Observable } from 'rxjs/Observable';
import { Country } from '../../interfaces/country';
import { MatTableDataSource, MatSort} from '@angular/material';

@Component({
  selector: 'app-countries-list',
  templateUrl: './countries-list.component.html',
  styleUrls: ['./countries-list.component.scss']
})
export class CountriesListComponent implements OnInit, AfterViewInit {

  public displayedColumns = ['position', 'name', 'population', 'area', 'actions'];
  public dataSource: any;
  public showSpinner = true;
  public showList = false;

  @Input() countries$: Observable<Country[]>;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private countriesService: CountriesService) {}

  ngOnInit() {
    this.getAllCountries();
    this.dataSource = new MatTableDataSource<Country>([]);
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  getAllCountries(): void {
    this.countries$ = this.countriesService.getAllCountries();
    this.countries$.first().subscribe(data => {
      let position = 1;
      data.map(el => {
        el.id = position;
        ++position;
      });
      this.showSpinner = false;
      this.showList = true;
      return this.dataSource.data = data;
    });
  }
}

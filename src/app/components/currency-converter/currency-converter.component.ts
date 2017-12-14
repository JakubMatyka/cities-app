import {Component, Input, OnInit} from '@angular/core';
import {ConverterService} from '../../services/converter/converter.service';
import {Currency} from '../../interfaces/currency';
import {SnackbarService} from '../../services/snackbar/snackbar.service';

@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.scss']
})
export class CurrencyConverterComponent implements OnInit {

  @Input() data;
  @Input() converter: Currency;
  @Input() converted: number;
  public country: any;

  constructor(private converterService: ConverterService,
              private snackbarService: SnackbarService) {
    this.converter = {
      from: '',
      fromAmount: 1,
      to: 'PL'
    };
  }

  ngOnInit() {
    this.country = this.data;
    this.converter.from = this.data.altSpellings[0];
  }

  convertCurrency() {
    console.log(this.converter);
    this.converterService.convertCurrency(this.converter)
      .subscribe(
        response => this.converted = response,
        error => {
          console.log(`Convert err: ${error}`)
          return this.snackbarService.openSnackBar(error);
        });
  }
}

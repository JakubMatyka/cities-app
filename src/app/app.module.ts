import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './routing/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { CountriesListComponent } from './components/countries-list/countries-list.component';
import { HeaderComponent } from './components/header/header.component';
import { CountriesDetailsComponent } from './components/countries-details/countries-details.component';
import { CurrencyConverterComponent } from './components/currency-converter/currency-converter.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AuthInterceptor } from './services/interceptor/auth-interceptor.service';
import { CountriesService } from './services/countires/countries.service';
import { ValuesPipe } from './pipe/valuesPipe';
import { ConverterService } from './services/converter/converter.service';
import {SnackbarService} from './services/snackbar/snackbar.service';
import {SnackbarComponent} from './components/snackbar/snackbar.component';

@NgModule({
  declarations: [
    AppComponent,
    CountriesListComponent,
    HeaderComponent,
    CountriesDetailsComponent,
    CurrencyConverterComponent,
    SnackbarComponent,
    ValuesPipe,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    CountriesService,
    ConverterService,
    SnackbarService],
  bootstrap: [AppComponent]
})
export class AppModule { }

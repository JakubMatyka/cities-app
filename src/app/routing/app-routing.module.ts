import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { CountriesListComponent } from '../components/countries-list/countries-list.component';
import {CountriesDetailsComponent} from '../components/countries-details/countries-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/list', pathMatch: 'full' },
  { path: 'list', component: CountriesListComponent },
  { path: 'detail/:name', component: CountriesDetailsComponent },
  { path: '**', redirectTo: '/list' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }

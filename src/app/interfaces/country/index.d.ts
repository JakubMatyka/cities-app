export interface Country {
  id?: number ;
  name: string;
  capital: string;
  altSpellings: Array<string>;
  relevance: string;
  region: string;
  subregion: string;
  translations: {[s: string]: string};
  population: number;
  latlng: Array<number>;
  demonym: string;
  area: number;
  gini: number;
  timezones: Array<string>;
  callingCodes: Array<string>;
  topLevelDomain: Array<string>;
  alpha2Code: string;
  alpha3Code: string;
  currencies: Array<string>;

}

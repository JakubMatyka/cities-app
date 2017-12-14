import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'values'})
export class ValuesPipe implements PipeTransform {
  transform(value: {}): string[] {

    if (!value) {
      return [];
    }

    return Object.keys(value);
  }
}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterWashedNumbers',
  standalone: true,
})
export class FilterWashedNumbersPipe implements PipeTransform {
  transform(array: number[], params: string): any {
    if (params === 'even') {
      return array.filter((number) => number % 2 == 0);
    } else if (params === 'odd') {
      return array.filter((number) => number % 2 !== 0);
    }
  }
}

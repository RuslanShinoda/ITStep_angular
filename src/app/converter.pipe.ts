import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'converter',
  standalone: true,
})
export class ConverterPipe implements PipeTransform {
  transform(value: string): string {
    let newSting = '';
    for (let i = 0; i < value.length; i++) {
      newSting += value[i] + value[i];
    }
    return newSting;
  }
}

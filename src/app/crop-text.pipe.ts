import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cropText',
  standalone: true,
})
export class CropTextPipe implements PipeTransform {
  transform(text: string, length: number): string {
    let textLength = text.length;
    let textEnd = textLength > length ? '...' : ''
    return text.slice(0, length) + textEnd;
  }
}

import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { ConverterPipe } from '../converter.pipe';
import { FilterWashedNumbersPipe } from '../filter-washed-numbers.pipe';
import { CropTextPipe } from '../crop-text.pipe';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [
    DatePipe,
    CurrencyPipe,
    ConverterPipe,
    FilterWashedNumbersPipe,
    CropTextPipe,
  ],
  templateUrl: './2nd_homework.component.html',
  styleUrl: './2nd_homework.component.css',
})
export class TestComponent {
  date = '1996.10.10';
  product = {
    name: 'Яблуко',
    price: 10.99,
    currency: 'UAH',
  };
  name = 'Іван';
  arrayNumber = [3, 8, 12, 5, 9, 10, 6];
  loremText =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores amet itaque ea non? Impedit harum eaque explicabo vitae, autem quam sit voluptas similique deserunt nihil rem ratione, inventore molestias officia!';
}

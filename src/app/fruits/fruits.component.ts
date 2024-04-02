import {
  NgFor,
  NgIf,
  NgStyle,
  NgSwitch,
  NgSwitchCase,
  NgSwitchDefault,
} from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-fruits',
  standalone: true,
  imports: [
    NgFor,
    FormsModule,
    NgIf,
    NgSwitch,
    NgSwitchCase,
    NgSwitchDefault,
    NgStyle,
  ],
  templateUrl: './fruits.component.html',
  styleUrl: './fruits.component.css',
})
export class FruitsComponent {
  fruits = [
    { name: 'Apple', price: 0.5 },
    { name: 'Banana', price: 0.3 },
    { name: 'Orange', price: 0.7 },
    { name: 'Pineapple', price: 2 },
    { name: 'Mango', price: 1.5 },
    { name: 'Grapes', price: 1.2 },
    { name: 'Watermelon', price: 3 },
  ];

  inputNumber: number | null = null;
  getPriceCategory(price: number): string {
    if (price < 1) {
      return 'cheap';
    } else if (price >= 1 && price <= 2) {
      return 'average';
    } else {
      return 'expensive';
    }
  }
}

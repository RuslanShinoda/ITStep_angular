import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DiceService {
  randomNumber() {
    return Math.floor(Math.random() * 6) + 1;
  }

  createArr(number: number) {
    let arrNumbers = [];
    for (let i = 0; i < number; i++) {
      arrNumbers?.push(this.randomNumber());
    }
    return arrNumbers;
  }

  constructor() {}
}

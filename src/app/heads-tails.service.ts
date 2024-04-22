import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HeadsTailsService {
  random() {
    return Math.floor(Math.random() * 2);
  }

  getResult() {
    let res: string = '';
    if (this.random()) {
      res = 'heads';
    } else {
      res = 'tails';
    }
    return res;
  }

  constructor() {}
}

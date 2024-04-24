import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-my-counter',
  standalone: true,
  imports: [],
  templateUrl: './my-counter.component.html',
  styleUrl: './my-counter.component.css',
})
export class MyCounterComponent {
  counters = [
    { id: 1, initial: 6, min: -5, max: 10 },
    { id: 2, initial: 5 },
    { id: 3 },
  ];

  @ViewChild('counterValue') counterRefs: ElementRef | undefined;

  increment(id: number) {
    const counter = this.counters.find((c) => c.id === id);
    if (counter && (!counter.max || counter.initial < counter.max)) {
      if (!counter.initial) {
        counter.initial = 0;
      }
      counter.initial++;
    }
  }

  decrement(id: number) {
    const counter = this.counters.find((c) => c.id === id);
    if (counter && (!counter.min || counter.initial > counter.min)) {
      if (!counter.initial) {
        counter.initial = 0;
      }
      counter.initial--;
    }
  }

  reset(id: number) {
    const counter = this.counters.find((c) => c.id === id);
    if (counter) {
      counter.initial = 0;
    }
  }
}

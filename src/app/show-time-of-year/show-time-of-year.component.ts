import { Component, ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-show-time-of-year',
  standalone: true,
  imports: [],
  templateUrl: './show-time-of-year.component.html',
  styleUrl: './show-time-of-year.component.css',
})
export class ShowTimeOfYearComponent {
  @ContentChild('selectDate', { static: false }) private dateElement:
    | ElementRef
    | undefined;

  timeOfYear?: string;
  showDate() {
    if (this.dateElement) {
      let userDate = new Date(this.dateElement.nativeElement.value);
      let month = userDate.getMonth();
      if (month < 2 || month === 11) {
        this.timeOfYear = 'Зима';
      } else if (month < 5) {
        this.timeOfYear = 'Весна';
      } else if (month < 8) {
        this.timeOfYear = 'Літо';
      } else {
        this.timeOfYear = 'Осінь';
      }
    }
  }
}

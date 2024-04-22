import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-total-income',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './total-income.component.html',
  styleUrl: './total-income.component.css',
})
export class TotalIncomeComponent {
  @Output() monthlyIncome = new EventEmitter<any>();
  @Input() receivedValues: any = {
    total: 0,
    average: 0,
    minimum: 0,
    maximum: 0
  };

  totalIncome: any = {
    January: 300,
    February: 300,
    March: 700,
    April: 300,
    May: 500,
    June: 300,
    July: 400,
    August: 300,
    September: 0,
    October: 700,
    November: 400,
    December: 300,
  };

  collectData() {
    this.monthlyIncome.emit(this.totalIncome);
  }
}

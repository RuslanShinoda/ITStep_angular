import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgIf, NgStyle } from '@angular/common';
import { SelectDataComponent } from './select-data/select-data.component';
import { ChooseEmailsComponent } from './choose-emails/choose-emails.component';
import { TotalIncomeComponent } from './total-income/total-income.component';
import { HeadsTailsService } from './heads-tails.service';
import { HeadsTailsComponent } from './heads-tails/heads-tails.component';
import { DiceComponent } from './dice/dice.component';
import { DiceService } from './dice.service';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [HeadsTailsService, DiceService],
  imports: [
    RouterOutlet,
    NgIf,
    NgStyle,
    SelectDataComponent,
    ChooseEmailsComponent,
    TotalIncomeComponent,
    HeadsTailsComponent,
    DiceComponent,
  ],
})
export class AppComponent {
  // Buttons to show tasks
  chooseData: boolean = false;
  emailList: boolean = false;
  totalIncome: boolean = false;
  headsTails: boolean = false;
  dice: boolean = false;

  // Task #1
  selectedData!: string;

  dateWithChildren(date: string) {
    this.selectedData = new Date(date).toLocaleDateString();
  }

  // Task #2
  receivedArrEmail!: any;

  getArrEmails(emails: any) {
    this.receivedArrEmail = emails;
  }

  // Task #4
  totalIncomeObj!: any;
  calculatedValues!: any;

  getIncomeData(income: any) {
    this.totalIncomeObj = income;
    this.calculatedValues = this.calcValueIncome(this.totalIncomeObj);
  }

  calcValueIncome(obj: any) {
    let total = 0;
    let average = 0;
    let minimum = Infinity;
    let maximum = -Infinity;

    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        const value = obj[key];
        total += value;
        minimum = Math.min(minimum, value);
        maximum = Math.max(maximum, value);
      }
    }

    const numOfEntries = Object.keys(obj).length;
    average = Math.floor(total / numOfEntries);

    return {
      total,
      average,
      minimum,
      maximum,
    };
  }
}

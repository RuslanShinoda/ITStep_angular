import { Component } from '@angular/core';
import { DiceService } from '../dice.service';
import { NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'app-dice',
  standalone: true,
  providers: [DiceService],
  imports: [NgIf, NgClass],
  templateUrl: './dice.component.html',
  styleUrl: './dice.component.css',
})
export class DiceComponent {
  userRes?: any;
  programRes?: any;
  whoWon?: string;
  constructor(private getResult: DiceService) {}

  createRes(number: number) {
    this.userRes = this.getResult.createArr(number);
    this.programRes = this.getResult.createArr(number);

    let userResSum = this.userRes.reduce(
      (acc: number, val: number) => acc + val,
      0
    );
    let programResSum = this.programRes.reduce(
      (acc: number, val: number) => acc + val,
      0
    );

    if (userResSum == programResSum) {
      this.whoWon = 'It was a draw :)';
    } else if (userResSum > programResSum) {
      this.whoWon = 'You won!';
    } else {
      this.whoWon = 'You lost!';
    }
  }
}

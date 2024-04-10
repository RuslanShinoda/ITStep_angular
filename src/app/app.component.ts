import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TableGenerationComponent } from './table-generation/table-generation.component';
import { NgIf, NgStyle } from '@angular/common';
import { WordListComponent } from './word-list/word-list.component';
import { ChangeBackgroundColorComponent } from './change-background-color/change-background-color.component';
import { ColorTableComponent } from './color-table/color-table.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    RouterOutlet,
    TableGenerationComponent,
    NgIf,
    WordListComponent,
    ChangeBackgroundColorComponent,
    ColorTableComponent,
    NgStyle,
  ],
})
export class AppComponent {
  tableGeneration: boolean = false;
  wordList: boolean = false;
  changeBackgroundColor: boolean = false;
  colorTable: boolean = false;

  // Task #1 Input
  randomNumber: number = 0;
  arrNumbers: number[] = [];
  expression: any;

  generationNumber() {
    this.randomNumber = Math.floor(Math.random() * 101);
    this.arrNumbers.push(this.randomNumber);
  }

  //Task #2 Input
  arrWords = [
    'computer',
    'programming',
    'language',
    'developer',
    'application',
    'website',
    'javascript',
    'framework',
    'database',
    'algorithm',
  ];

  // Task #1 Output
  textAndColor = { text: '', color: '' };
  receiveText(text: string) {
    this.textAndColor.text = text;
  }

  receiveColor(color: string) {
    this.textAndColor.color = color;
  }

  // Task #4 Output
  whatColorMassage: string = '';

  getColor(color: string) {
    this.whatColorMassage = `Вибраний колір "${color}"`;
  }

  // Task #5 Output
  numberX2: number = 0;

  multipleNumber(number: number) {
    this.numberX2 = number * 2;
  }
}

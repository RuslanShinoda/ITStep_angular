import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-digital-background-box',
  standalone: true,
  imports: [FormsModule, NgStyle],
  templateUrl: './digital-background-box.component.html',
  styleUrl: './digital-background-box.component.css',
})
export class DigitalBackgroundBoxComponent {
  number: number = 0;
  get expression() {
    let backgroundColor: string;

    switch (this.number) {
      case 1:
        backgroundColor = '#00FF00';
        break;
      case 2:
        backgroundColor = '#00FF33';
        break;
      case 3:
        backgroundColor = '#00FF66';
        break;
      case 4:
        backgroundColor = '#99FF33';
        break;
      case 5:
        backgroundColor = '#CCFF33';
        break;
      case 6:
        backgroundColor = '#FFFF00';
        break;
      case 7:
        backgroundColor = '#FFCC33';
        break;
      case 8:
        backgroundColor = '#FF9900';
        break;
      case 9:
        backgroundColor = '#FF6600';
        break;
      case 10:
        backgroundColor = '#FF0000';
        break;
      default:
        backgroundColor = '#FFFFFF';
        break;
    }

    return backgroundColor;
  }
}

import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { log } from 'console';

@Component({
  selector: 'app-change-size-block',
  standalone: true,
  imports: [FormsModule, NgStyle],
  templateUrl: './change-size-block.component.html',
  styleUrl: './change-size-block.component.css',
})
export class ChangeSizeBlockComponent {
  width: string = '100px'; // Ініціалізуємо змінні
  height: string = '100px';
  rotate: number = 0;
  widthValue: number = 100;
  heightValue: number = 100;
  rotateValue: number = 0;

  updateWidth() {
    this.width = this.widthValue + 'px';
  }

  updateHeight() {
    this.height = this.heightValue + 'px';
  }

  updateRotate() {
    this.rotate = this.rotateValue;
  }
}

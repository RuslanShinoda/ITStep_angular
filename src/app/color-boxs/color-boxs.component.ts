import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-color-boxs',
  standalone: true,
  imports: [NgClass],
  templateUrl: './color-boxs.component.html',
  styleUrl: './color-boxs.component.css',
})
export class ColorBoxsComponent {
  color = '';
  currentNumber: number = 0;
  updateNumber() {
    this.currentNumber++;
  }
  randomColor() {
    return `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(
      Math.random() * 255
    )}, ${Math.floor(Math.random() * 255)}`;
  }
  createColorBox() {
    let div = document.createElement('div');
    div.textContent = this.currentNumber.toString();
    div.style.backgroundColor = this.randomColor();
    div.style.width = '200px';
    div.style.height = '200px';
    div.style.display = 'flex';
    div.style.justifyContent = 'center';
    div.style.alignItems = 'center';
    div.style.fontWeight = '800';
    div.style.color = 'white';

    let container = document.getElementById('boxesContainer');
    if (container) {
      container.appendChild(div);
    } else {
      console.error('Елемент контейнера не знайдено');
    }
    this.updateNumber();
  }
}

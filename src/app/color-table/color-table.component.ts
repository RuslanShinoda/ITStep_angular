import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-color-table',
  standalone: true,
  imports: [],
  templateUrl: './color-table.component.html',
  styleUrl: './color-table.component.css',
})
export class ColorTableComponent {
  @Output() colorHover = new EventEmitter<string>();

  sendColor(color: string) {
    this.colorHover.emit(color);
  }
}

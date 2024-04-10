import { NgFor } from "@angular/common";
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table-generation',
  standalone: true,
  imports: [NgFor],
  templateUrl: './table-generation.component.html',
  styleUrl: './table-generation.component.css',
})
export class TableGenerationComponent {
  @Input() arrNumbers: number[] = [];

  getRows() {
    const rows = [];
    for (let i = 0; i < this.arrNumbers.length; i += 5) {
      rows.push(this.arrNumbers.slice(i, i + 5));
    }
    return rows;
  }
}

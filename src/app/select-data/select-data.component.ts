import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-select-data',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './select-data.component.html',
  styleUrl: './select-data.component.css',
})
export class SelectDataComponent {
  @Output() dateSelected = new EventEmitter<string>();
  date!: string;

  onDateSelect(event: any) {
    this.date = event;
    this.dateSelected.emit(this.date);
  }
}

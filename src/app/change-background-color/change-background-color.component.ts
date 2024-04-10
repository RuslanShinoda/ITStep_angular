import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-change-background-color',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './change-background-color.component.html',
  styleUrl: './change-background-color.component.css',
})
export class ChangeBackgroundColorComponent {
  enteredText: string = '';
  backgroundColor: string = '';

  @Output() text = new EventEmitter<string>();
  @Output() color = new EventEmitter<string>();

  emitText() {
    this.text.emit(this.enteredText);
  }

  emitColor(color: string) {
    this.color.emit(color);
  }
}

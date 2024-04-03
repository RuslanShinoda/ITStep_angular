import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-inputs',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-inputs.component.html',
  styleUrl: './create-inputs.component.css',
})
export class CreateInputsComponent {
  inputNumber: number = 0;
  arrayInputDigits: any[] = [];
  divideNumberIntoDigits() {
    this.arrayInputDigits = this.inputNumber.toString().split('');
  }
}

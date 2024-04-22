import { Component } from '@angular/core';
import { HeadsTailsService } from '../heads-tails.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-heads-tails',
  standalone: true,
  providers: [HeadsTailsService],
  imports: [FormsModule],
  templateUrl: './heads-tails.component.html',
  styleUrl: './heads-tails.component.css',
})
export class HeadsTailsComponent {
  constructor(private resultHeadsTail: HeadsTailsService) {}

  res?: string;
  headsTails?: string;
  message?: string;

  getResultHeadsTail() {
    this.res = this.resultHeadsTail.getResult();

    if (this.headsTails == undefined) {
      this.message = `Please select something.`;
    } else if (this.res == this.headsTails) {
      this.message = `You guessed right! It's ${this.res}`;
    } else {
      this.message = `Sorry, you guessed wrong. It's ${this.res}`;
    }
  }
}

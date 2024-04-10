import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-word-list',
  standalone: true,
  imports: [NgIf],
  templateUrl: './word-list.component.html',
  styleUrl: './word-list.component.css',
})
export class WordListComponent {
  @Input() words: any = [];
  show: boolean = false;
  toggleShow() {
    this.show = !this.show;
  }
}

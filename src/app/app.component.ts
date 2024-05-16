import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NgIf, NgStyle } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    NgIf,
    NgStyle,
    RouterOutlet,
    RouterLink
  ],
})
export class AppComponent {
  title: any;
  // Buttons to show tasks
  changeLink: boolean = false;
}

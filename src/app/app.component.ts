import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgIf, NgStyle } from '@angular/common';
import { SearchMoviesComponent } from "./search-movies/search-movies.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, NgIf, NgStyle, SearchMoviesComponent]
})
export class AppComponent {
  // Buttons to show tasks
  chooseData: boolean = false;
}

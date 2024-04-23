import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RequestService } from '../request.service';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-search-movies',
  standalone: true,
  imports: [HttpClientModule, FormsModule, NgIf],
  providers: [RequestService],
  templateUrl: './search-movies.component.html',
  styleUrl: './search-movies.component.css',
})
export class SearchMoviesComponent {
  constructor(private requestOMDb: RequestService) {}

  movieTitle?: string;
  movieYear?: number;
  longDescription?: string;
  movieInfo?: any;

  ngOnInit(): void {
    this.requestOMDb
      .requestToOMDb(this.movieTitle, this.movieYear, this.longDescription)
      .subscribe((res) => {
        this.movieInfo = res;
        console.log(this.movieInfo);
      });
  }
}

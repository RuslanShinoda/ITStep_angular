import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RequestService {
  myUrl?: URL;
  myOMDbApiKey = '9e85ef58';

  constructor(private request: HttpClient) {}

  requestToOMDb(
    movieTitle: string | undefined,
    movieYear?: number | undefined,
    longDescription?: string | undefined
  ) {
    this.myUrl = new URL('http://www.omdbapi.com/');
    this.myUrl.search = `apikey=${this.myOMDbApiKey}`;

    if (movieTitle) {
      this.myUrl.searchParams.append('t', movieTitle);
    }

    if (movieYear) {
      this.myUrl.searchParams.append('y', movieYear.toString());
    }

    if (longDescription) {
      this.myUrl.searchParams.append('plot', longDescription);
    }

    return this.request.get(this.myUrl.toString());
  }
}

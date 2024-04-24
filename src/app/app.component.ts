import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgIf, NgStyle } from '@angular/common';
import { ChangeLinkComponent } from './change-link/change-link.component';
import { MyCounterComponent } from './my-counter/my-counter.component';
import { ShowTimeOfYearComponent } from './show-time-of-year/show-time-of-year.component';
import { ShowImageComponent } from './show-image/show-image.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [
        RouterOutlet,
        NgIf,
        NgStyle,
        ChangeLinkComponent,
        MyCounterComponent,
        ShowTimeOfYearComponent,
        ShowImageComponent
    ]
})
export class AppComponent {
  // Buttons to show tasks
  changeLink: boolean = false;
  counter: boolean = false;
  showTimeOfYear: boolean = false;
  showImage: boolean = false;

  // Task 2 @ContentChild
  todayDate() {
    return new Date().toISOString().slice(0, 10);
  }

  // Task 3 @ContentChild
  imgArray: string[] = [
    'https://i.pinimg.com/564x/95/c1/ee/95c1ee5f19bd62cae70e39b4e0a69a07.jpg',
    'https://i.pinimg.com/564x/f2/a9/31/f2a9310be7d13bb02ffbb0bf3445a8b4.jpg',
    'https://i.pinimg.com/564x/45/a1/cd/45a1cdd8ba822cf58b8a75946502ded7.jpg',
    'https://i.pinimg.com/564x/da/29/14/da29142318f3e3a4dcef3c765ac9b20e.jpg',
    'https://i.pinimg.com/564x/e0/a3/77/e0a3771a8a234bbe879a91a5a89a2c7f.jpg',
  ];

}

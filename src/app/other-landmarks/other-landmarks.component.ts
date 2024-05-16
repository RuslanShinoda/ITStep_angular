import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Place {
  name: string;
  description: string;
}

@Component({
  selector: 'app-other-landmarks',
  standalone: true,
  templateUrl: './other-landmarks.component.html',
  styleUrls: ['./other-landmarks.component.css'],
  imports: [NgFor, RouterLink],
})

export class OtherLandmarksComponent implements OnInit {
  places: Place[] = [
    {
      name: 'Пагорб Слави',
      description:
        "Пагорб Слави — це пам'ятник загиблим воїнам у Великій Вітчизняній війні. Розташований на високому пагорбі, звідки відкривається прекрасний вид на місто."
    },
    {
      name: 'Обласна державна адміністрація',
      description:
        'Обласна державна адміністрація Черкаської області — це важливий адміністративний центр регіону.',

    },
    {
      name: 'Парк "Сосновий бір"',
      description:
        'Парк "Сосновий бір" — одне з найбільших та найкрасивіших місць відпочинку у Черкасах.',

    },
    {
      name: 'Обласний краєзнавчий музей',
      description:
        'Обласний краєзнавчий музей пропонує унікальні експозиції, що відображають історію та культуру Черкащини.',

    },
    {
      name: 'Долина Троянд',
      description:
        'Долина Троянд — один з найбільших розплідників троянд в Україні, де можна насолодитися багатою колекцією цієї квітки.',

    },
  ];

  constructor() {}

  ngOnInit(): void {}
}

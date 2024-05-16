import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface Place {
  name: string;
  description: string;
  images: string[];
}

@Component({
  selector: 'app-landmark-detail',
  standalone: true,
  templateUrl: './landmark-detail.component.html',
  styleUrls: ['./landmark-detail.component.css'],
  imports: [NgIf, NgFor],
})
export class LandmarkDetailComponent implements OnInit {
  landmarkName?: string | null;
  place?: Place;

  places: Place[] = [
    {
      name: 'Пагорб Слави',
      description:
        "Пагорб Слави — це пам'ятник загиблим воїнам у Великій Вітчизняній війні. Розташований на високому пагорбі, звідки відкривається прекрасний вид на місто. Це місце є символом героїзму та мужності, і є важливим місцем пам'яті для мешканців Черкас.",
        images: ['assets/cherkasy/pagorbSlavi.jpg'],
    },
    {
      name: 'Обласна державна адміністрація',
      description:
        'Обласна державна адміністрація Черкаської області — це важливий адміністративний центр регіону. Вона відповідає за координацію роботи усіх відомств області та забезпечує виконання законів України на території Черкаської області.',
        images: ['assets/cherkasy/oblDerjAdmin.jpg'],
    },
    {
      name: 'Парк "Сосновий бір"',
      description:
        'Парк "Сосновий бір" — одне з найбільших та найкрасивіших місць відпочинку у Черкасах. Завдяки своїм великим зеленим просторам, цей парк є ідеальним місцем для прогулянок, пікніків та інших активностей на свіжому повітрі.',
        images: ['assets/cherkasy/guaardenSosnoviyBir.jpg'],
    },
    {
      name: 'Обласний краєзнавчий музей',
      description:
        'Обласний краєзнавчий музей пропонує унікальні експозиції, що відображають історію та культуру Черкащини. Він містить численні артефакти, які розповідають про історію регіону, від давніх часів до сучасності.',
        images: [
          'assets/cherkasy/regionalLocalLoreMuseum.jpg',
          'assets/cherkasy/regionalLocalLoreMuseum2.jpg',
        ],
    },
    {
      name: 'Долина Троянд',
      description:
        'Долина Троянд — один з найбільших розплідників троянд в Україні, де можна насолодитися багатою колекцією цієї квітки. Це чудове місце для прогулянок, особливо в теплу пору року, коли троянди цвітуть.',
        images: [
          'assets/cherkasy/dolinaTroyand3.jpg',
          'assets/cherkasy/dolinaTroyand5.jpg',
          'assets/cherkasy/dolinaTroyand.jpg',
          'assets/cherkasy/dolinaTroyand2.jpg',
        ],
    },
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.landmarkName = params.get('name');
      this.place = this.places.find(
        (place) => place.name === this.landmarkName
      );
    });
  }
}

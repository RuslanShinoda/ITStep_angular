import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dogs-img',
  standalone: true,
  imports: [NgFor],
  templateUrl: './dogs-img.component.html',
  styleUrl: './dogs-img.component.css',
})
export class DogsImgComponent {
  dogsImgs = [
    'https://i.pinimg.com/564x/92/21/ba/9221ba65886d085ff1b76425d0139a9b.jpg',
    'https://i.pinimg.com/564x/82/97/de/8297dee2d3f3e92a18cca6191d35938d.jpg',
    'https://i.pinimg.com/564x/92/2a/88/922a88894fb69ec8d6360931a767bc4b.jpg',
    'https://i.pinimg.com/564x/2b/80/ea/2b80eaf2e24c6d90fb6c5456e5f13fb8.jpg',
    'https://i.pinimg.com/736x/33/b3/d4/33b3d4dc2647391f63fb69ad087014a9.jpg',
  ];
}

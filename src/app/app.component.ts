import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardBalanceComponent } from './card-balance/card-balance.component';
import { DogsImgComponent } from './dogs-img/dogs-img.component';
import { NgIf } from '@angular/common';
import { SayHelloComponent } from "./say-hello/say-hello.component";
import { StudentsComponent } from "./students/students.component";
import { FruitsComponent } from "./fruits/fruits.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, CardBalanceComponent, DogsImgComponent, NgIf, SayHelloComponent, StudentsComponent, FruitsComponent]
})
export class AppComponent {
  showCardBalance = false;
  showDogsImg = false;
  sayHello = false;
  students = false;
  fruits = false;
}

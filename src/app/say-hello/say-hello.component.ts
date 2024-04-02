import { NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-say-hello',
  standalone: true,
  imports: [NgSwitchCase, NgSwitch, NgSwitchDefault],
  templateUrl: './say-hello.component.html',
  styleUrl: './say-hello.component.css',
})
export class SayHelloComponent {
  selectedLanguage: string | null = prompt('Введіть якою мовою хочете відобразити сайт.', 'english');
}

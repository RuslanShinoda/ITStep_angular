import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [FormsModule, NgFor, NgIf],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.css',
})
export class RegisterFormComponent {
  aboutUser: any = {
    login: '',
    password: '',
    gender: '',
    city: '',
    games: [],
    about: '',
    photo: '',
  };

  passwordAgain: string = '';
  choseGames: any = [];

  regionalCentersUkraine = [
    'Біла Церква',
    'Вінниця',
    'Дніпро',
    'Донецьк',
    'Івано-Франківськ',
    'Запоріжжя',
    'Житомир',
    'Київ',
    'Краматорськ',
    'Кривий Ріг',
    'Луганськ',
    'Львів',
    'Макіївка',
    'Маріуполь',
    'Мелітополь',
    'Миколаїв',
    'Одеса',
    'Полтава',
    'Рівне',
    'Севастополь',
    'Сімферополь',
    'Суми',
    'Тернопіль',
    'Ужгород',
    'Харків',
    'Херсон',
    'Хмельницький',
    'Черкаси',
    'Чернівці',
    'Чернігів',
  ];

  favoriteGames = [
    'Футбол',
    "Комп'ютерні ігри",
    'Шахи',
    'Баскетбол',
    'Карти',
    'Теніс',
  ];

  userValid: boolean = false;

  allError: any = {};

  isValid() {
    let valid = true;

    // Перевірка логіна
    if (this.aboutUser.login.length <= 3) {
      this.allError.login = 'Логін повинен бути більший за 3 символи';
      valid = false;
    }

    // Перевірка пароля
    if (
      this.aboutUser.password.length <= 6 ||
      !/\d/.test(this.aboutUser.password) ||
      !/[A-Z]/.test(this.aboutUser.password)
    ) {
      this.allError.password =
        'Пароль повинен бути довшим за 6 символів, містити хоча б одну велику літеру та цифру';
      valid = false;
    }

    // Перевірка повторного пароля
    if (this.aboutUser.password !== this.passwordAgain) {
      this.allError.passwordRepeat = 'Паролі не співпадають';
      valid = false;
    }

    // Перевірка статі
    if (!this.aboutUser.gender) {
      this.allError.gender = 'Будь ласка, виберіть стать';
      valid = false;
    }

    // Перевірка міста
    if (!this.aboutUser.city) {
      this.allError.city = 'Будь ласка, виберіть місто';
      valid = false;
    }

    return valid;
  }

  onSubmit() {
    if (!this.isValid()) {
      this.allError.isValid = 'Форма заповнена некоректно';
      console.log(this.allError);

      return;
    }

    let chosenGames = [];
    for (let i = 0; i < this.aboutUser.games.length; i++) {
      if (this.aboutUser.games[i]) {
        chosenGames.push(this.favoriteGames[i]);
      }
    }

    this.allError = {};
    this.userValid = true;
    this.aboutUser.games = chosenGames;
  }
}

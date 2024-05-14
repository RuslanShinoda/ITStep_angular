import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormArray,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [FormsModule, NgFor, NgIf, ReactiveFormsModule],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.css',
})
export class RegisterFormComponent {
  myForm: FormGroup;
  isSubmitted: boolean = false;
  userPhoto: string | ArrayBuffer | null = null;

  constructor() {
    this.myForm = new FormGroup({
      userLogin: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      userPassword: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        this.uppercaseValidator,
        this.numberValidator,
      ]),
      confirmPassword: new FormControl('', Validators.required),
      userGender: new FormControl('', Validators.required),
      userCity: new FormControl('', Validators.required),
      userGames: new FormArray([]),
      userAboutYourself: new FormControl(),
      userPhoto: new FormControl(),
    });
  }

  uppercaseValidator(control: FormControl): { [key: string]: boolean } | null {
    const value: string = control.value;
    const hasUppercase = /[A-Z]/.test(value);
    return hasUppercase ? null : { uppercaseRequired: true };
  }

  numberValidator(control: FormControl): { [key: string]: boolean } | null {
    const value: string = control.value;
    const hasNumber = /\d/.test(value);
    return hasNumber ? null : { numberRequired: true };
  }

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

  clickSubmit: boolean = false;

  onCheckboxChange(event: any) {
    const formArray: FormArray = this.myForm.get('userGames') as FormArray;

    if (event.target.checked) {
      formArray.push(new FormControl(event.target.value));
    } else {
      const index = formArray.controls.findIndex(
        (ctrl) => ctrl.value === event.target.value
      );
      if (index >= 0) {
        formArray.removeAt(index);
      }
    }
  }

  onFileChange(event: any) {
    const reader = new FileReader();

    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);

      reader.onload = () => {
        this.userPhoto = reader.result;
        this.myForm.patchValue({
          userPhoto: reader.result,
        });
      };
    }
  }

  onSubmit() {
    this.clickSubmit = true;
    if (this.myForm.valid) {
      this.isSubmitted = true;
      console.log(this.myForm.value);
    } else {
      this.isSubmitted = false;
    }
  }
}

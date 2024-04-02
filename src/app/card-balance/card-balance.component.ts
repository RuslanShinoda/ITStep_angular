import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-card-balance',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './card-balance.component.html',
  styleUrl: './card-balance.component.css',
})
export class CardBalanceComponent {
  card = {
    firstName: 'Name',
    lastName: 'Surname',
    cardNumber: '1234567890123456',
    balance: 1000,
  };
}

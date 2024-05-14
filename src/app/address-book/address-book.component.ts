import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-address-book',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, NgFor],
  templateUrl: './address-book.component.html',
  styleUrl: './address-book.component.css',
})
export class AddressBookComponent {
  contactForm!: FormGroup;
  contacts: any[] = [];

  constructor(private fb: FormBuilder) {
    this.createContactForm();
  }

  createContactForm() {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.contacts.push(this.contactForm.value);
      this.contactForm.reset();
    } else {
      alert(`Будь ласка, заповніть всі обов'язкові поля правильно.`);
    }
  }

  deleteContact(contact: any) {
    const index = this.contacts.indexOf(contact);
    if (index !== -1) {
      this.contacts.splice(index, 1);
    }
  }
}

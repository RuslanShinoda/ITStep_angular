import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgIf, NgStyle } from '@angular/common';
import { RegisterFormComponent } from "./register-form/register-form.component";
import { AddressBookComponent } from "./address-book/address-book.component";


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, NgIf, NgStyle, RegisterFormComponent, AddressBookComponent]
})
export class AppComponent {

  // Buttons to show tasks
  registerForm: boolean = false;
  addressBook: boolean = false;

}

import { Component, Output, EventEmitter } from '@angular/core';
import {} from 'stream';

@Component({
  selector: 'app-choose-emails',
  standalone: true,
  imports: [],
  templateUrl: './choose-emails.component.html',
  styleUrl: './choose-emails.component.css',
})
export class ChooseEmailsComponent {
  arrEmails: string[] = [
    'codeNinja42@cyber.net',
    'artFreak99@creativity.com',
    'musicMaestro@harmony.org',
    'gamingGuru88@playtime.io',
    'bookworm55@bibliophile.com',
    'fitnessFanatic23@workout.world',
    'foodieFusion@yummail.com',
    'wanderlustExplorer@adventure.com',
  ];

  @Output() emailsWithParent = new EventEmitter<any>();
  selectedEmails: string[] = [];

  onCheckboxChange(email: string, event: any) {
    if (event.target.checked) {
      this.selectedEmails.push(email);
    } else {
      this.selectedEmails = this.selectedEmails.filter((e) => e !== email);
    }
    this.emailsWithParent.emit(this.selectedEmails);
  }

}

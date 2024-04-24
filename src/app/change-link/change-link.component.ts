import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-change-link',
  standalone: true,
  imports: [],
  templateUrl: './change-link.component.html',
  styleUrl: './change-link.component.css',
})
export class ChangeLinkComponent {
  @ViewChild('enteredLink', { static: false })
  private href: ElementRef | undefined;

  followLink() {
    let link = this.href?.nativeElement.value;

    if (link) {
      let aElement = document.getElementById(
        'linkElement'
      ) as HTMLAnchorElement; // Тут знайшов відповідь на питання, як можна отримати посилання на елемент
      if (aElement) {
        aElement.href = link;
      }
    }
  }
}

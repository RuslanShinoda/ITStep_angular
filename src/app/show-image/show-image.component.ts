import {
  Component,
  ContentChildren,
  ElementRef,
  HostListener,
  QueryList,
} from '@angular/core';

@Component({
  selector: 'app-show-image',
  standalone: true,
  imports: [],
  templateUrl: './show-image.component.html',
  styleUrl: './show-image.component.css',
})
export class ShowImageComponent {
  // Тут я застосував children для отримання масиву всих елементів а не одного
  @ContentChildren('dogsImages', { descendants: true })
  dogsImages: QueryList<ElementRef> | undefined;

  selectedImg?: string;

  ngAfterContentInit() {
    if (this.dogsImages) {
      this.dogsImages.forEach((elem) => {
        elem.nativeElement.addEventListener(
          'click',
          (event: { target: { src: any } }) => {
            this.selectedImg = event.target.src;
          }
        );
      });
    }
  }

  closeWindow() {
    this.selectedImg = '';
  }

  // Знайшов можливість закрити вікно за допомогою клавіши Escape
  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      this.closeWindow();
    }
  }
}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IronManComponent } from "./iron-man/iron-man.component";
import { BatmanComponent } from "./batman/batman.component";
import { SpiderManComponent } from "./spider-man/spider-man.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, IronManComponent, BatmanComponent, SpiderManComponent]
})
export class AppComponent {
  title = 'LearnAngular';
}

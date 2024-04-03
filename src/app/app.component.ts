import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { CreateInputsComponent } from "./create-inputs/create-inputs.component";
import { ChangeSizeBlockComponent } from "./change-size-block/change-size-block.component";
import { ColorBoxsComponent } from "./color-boxs/color-boxs.component";
import { DigitalBackgroundBoxComponent } from "./digital-background-box/digital-background-box.component";


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [NgIf, CreateInputsComponent, ChangeSizeBlockComponent, ColorBoxsComponent, DigitalBackgroundBoxComponent]
})
export class AppComponent {
  createInputs = false;
  changeSizeBlock = false;
  colorBoxs = false;
  digitalBackgroundBox = false;
}

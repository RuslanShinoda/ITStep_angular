import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorBoxsComponent } from './color-boxs.component';

describe('ColorBoxsComponent', () => {
  let component: ColorBoxsComponent;
  let fixture: ComponentFixture<ColorBoxsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColorBoxsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ColorBoxsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

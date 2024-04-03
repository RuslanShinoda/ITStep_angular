import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalBackgroundBoxComponent } from './digital-background-box.component';

describe('DigitalBackgroundBoxComponent', () => {
  let component: DigitalBackgroundBoxComponent;
  let fixture: ComponentFixture<DigitalBackgroundBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DigitalBackgroundBoxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DigitalBackgroundBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

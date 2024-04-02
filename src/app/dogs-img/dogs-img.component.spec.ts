import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DogsImgComponent } from './dogs-img.component';

describe('DogsImgComponent', () => {
  let component: DogsImgComponent;
  let fixture: ComponentFixture<DogsImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DogsImgComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DogsImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

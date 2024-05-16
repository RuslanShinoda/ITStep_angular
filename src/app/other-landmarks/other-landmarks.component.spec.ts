import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherLandmarksComponent } from './other-landmarks.component';

describe('OtherLandmarksComponent', () => {
  let component: OtherLandmarksComponent;
  let fixture: ComponentFixture<OtherLandmarksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OtherLandmarksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OtherLandmarksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

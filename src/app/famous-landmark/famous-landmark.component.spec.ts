import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamousLandmarkComponent } from './famous-landmark.component';

describe('FamousLandmarkComponent', () => {
  let component: FamousLandmarkComponent;
  let fixture: ComponentFixture<FamousLandmarkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FamousLandmarkComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FamousLandmarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

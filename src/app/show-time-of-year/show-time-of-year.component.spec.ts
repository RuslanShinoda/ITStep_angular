import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowTimeOfYearComponent } from './show-time-of-year.component';

describe('ShowTimeOfYearComponent', () => {
  let component: ShowTimeOfYearComponent;
  let fixture: ComponentFixture<ShowTimeOfYearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowTimeOfYearComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShowTimeOfYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

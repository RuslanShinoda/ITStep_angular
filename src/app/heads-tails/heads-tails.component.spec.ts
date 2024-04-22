import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadsTailsComponent } from './heads-tails.component';

describe('HeadsTailsComponent', () => {
  let component: HeadsTailsComponent;
  let fixture: ComponentFixture<HeadsTailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeadsTailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeadsTailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeLinkComponent } from './change-link.component';

describe('ChangeLinkComponent', () => {
  let component: ChangeLinkComponent;
  let fixture: ComponentFixture<ChangeLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChangeLinkComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChangeLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

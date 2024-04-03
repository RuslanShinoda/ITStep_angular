import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeSizeBlockComponent } from './change-size-block.component';

describe('ChangeSizeBlockComponent', () => {
  let component: ChangeSizeBlockComponent;
  let fixture: ComponentFixture<ChangeSizeBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChangeSizeBlockComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChangeSizeBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

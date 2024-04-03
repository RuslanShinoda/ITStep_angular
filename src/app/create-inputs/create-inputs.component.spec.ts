import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateInputsComponent } from './create-inputs.component';

describe('CreateInputsComponent', () => {
  let component: CreateInputsComponent;
  let fixture: ComponentFixture<CreateInputsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateInputsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateInputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

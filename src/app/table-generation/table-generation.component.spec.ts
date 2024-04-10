import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableGenerationComponent } from './table-generation.component';

describe('TableGenerationComponent', () => {
  let component: TableGenerationComponent;
  let fixture: ComponentFixture<TableGenerationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableGenerationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TableGenerationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

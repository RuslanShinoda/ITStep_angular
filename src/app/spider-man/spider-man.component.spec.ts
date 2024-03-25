import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpiderManComponent } from './spider-man.component';

describe('SpiderManComponent', () => {
  let component: SpiderManComponent;
  let fixture: ComponentFixture<SpiderManComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpiderManComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpiderManComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

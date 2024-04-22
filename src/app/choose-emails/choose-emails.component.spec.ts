import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseEmailsComponent } from './choose-emails.component';

describe('ChooseEmailsComponent', () => {
  let component: ChooseEmailsComponent;
  let fixture: ComponentFixture<ChooseEmailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChooseEmailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChooseEmailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

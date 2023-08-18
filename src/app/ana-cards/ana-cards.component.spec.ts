import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnaCardsComponent } from './ana-cards.component';

describe('AnaCardsComponent', () => {
  let component: AnaCardsComponent;
  let fixture: ComponentFixture<AnaCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnaCardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnaCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

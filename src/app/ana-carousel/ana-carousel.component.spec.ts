import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnaCarouselComponent } from './ana-carousel.component';

describe('AnaCarouselComponent', () => {
  let component: AnaCarouselComponent;
  let fixture: ComponentFixture<AnaCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnaCarouselComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnaCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

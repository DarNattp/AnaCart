import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnaPageNotFoundComponent } from './ana-page-not-found.component';

describe('AnaPageNotFoundComponent', () => {
  let component: AnaPageNotFoundComponent;
  let fixture: ComponentFixture<AnaPageNotFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnaPageNotFoundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnaPageNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

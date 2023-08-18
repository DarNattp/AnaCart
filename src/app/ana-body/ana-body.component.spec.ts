import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnaBodyComponent } from './ana-body.component';

describe('AnaBodyComponent', () => {
  let component: AnaBodyComponent;
  let fixture: ComponentFixture<AnaBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnaBodyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnaBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

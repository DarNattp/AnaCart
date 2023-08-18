import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnafooterComponent } from './anafooter.component';

describe('AnafooterComponent', () => {
  let component: AnafooterComponent;
  let fixture: ComponentFixture<AnafooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnafooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnafooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

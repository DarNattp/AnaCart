import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnaheaderComponent } from './anaheader.component';

describe('AnaheaderComponent', () => {
  let component: AnaheaderComponent;
  let fixture: ComponentFixture<AnaheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnaheaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnaheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

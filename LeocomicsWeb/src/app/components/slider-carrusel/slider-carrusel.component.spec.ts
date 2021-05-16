import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderCarruselComponent } from './slider-carrusel.component';

describe('SliderCarruselComponent', () => {
  let component: SliderCarruselComponent;
  let fixture: ComponentFixture<SliderCarruselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SliderCarruselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderCarruselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

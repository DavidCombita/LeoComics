import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { NguCarouselConfig } from '@ngu/carousel';

@Component({
  selector: 'app-slider-carrusel',
  templateUrl: './slider-carrusel.component.html',
  styleUrls: ['./slider-carrusel.component.css'],
  providers: [ NgbCarouselConfig ]
})
export class SliderCarruselComponent implements OnInit{

  imgags = [
    'assets/Imagen_prueba_cortada.PNG'
  ];
  
  public carouselTile: NguCarouselConfig = {
    grid: { xs: 1, sm: 1, md: 3, lg: 3, all: 0 },
    slide: 3,
    speed: 250,
    point: {
      visible: true
    },
    load: 2,
    velocity: 0,
    touch: true,
    easing: 'cubic-bezier(0, 0, 0.2, 1)'
  };
  constructor() {}

  ngOnInit() {
  }
}

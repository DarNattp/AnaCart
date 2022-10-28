
import { Component, ViewChild,OnInit } from '@angular/core';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';


@Component({  selector: 'app-ana-carousel',
templateUrl: './ana-carousel.component.html',
styleUrls: ['./ana-carousel.component.css']})
export class AnaCarouselComponent implements OnInit{
  images:any
  ngOnInit(): void {
    this.images = ['1.jpg','1.jpg'].map((n) => `assets/${n}`);
  }

  paused = false;
  unpauseOnArrow = false;
  pauseOnIndicator = false;
  pauseOnHover = true;
  pauseOnFocus = true;

  @ViewChild('carousel', {static : true}) carousel: NgbCarousel | any;

  togglePaused() {
    if (this.paused) {
      this.carousel.cycle();
    } else {
      this.carousel.pause();
    }
    this.paused = !this.paused;
  }

  onSlide(slideEvent: NgbSlideEvent) {
    if (this.unpauseOnArrow && slideEvent.paused &&
      (slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)) {
      this.togglePaused();
    }
    if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
      this.togglePaused();
    }
  }
}
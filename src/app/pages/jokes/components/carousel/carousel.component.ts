import { Component, Input, ViewChild } from '@angular/core';
import { Joke } from '@common/models/joke.model';
import { Carousel } from 'primeng/carousel';

@Component({
  selector: 'jokes-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent {
  @Input() public jokes!: Joke[];

  @ViewChild('carousel') carousel!: Carousel;

  public onNextClick(): void {
    this.carousel.numScroll += 1;
    console.log(this.carousel);
  }
}

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
}

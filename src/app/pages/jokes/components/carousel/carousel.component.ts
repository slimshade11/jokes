import { Component, Input } from '@angular/core';
import { Joke } from '@common/models/joke.model';

@Component({
  selector: 'jokes-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent {
  @Input() public jokes!: Joke[];
}

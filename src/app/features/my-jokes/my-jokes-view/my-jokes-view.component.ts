import { Component } from '@angular/core';
import { Joke } from '@common/models/joke.model';

@Component({
  selector: 'jokes-my-jokes-view',
  templateUrl: './my-jokes-view.component.html',
  styleUrls: ['./my-jokes-view.component.scss'],
})
export class MyJokesViewComponent {
  public jokes$!: Joke[];
}

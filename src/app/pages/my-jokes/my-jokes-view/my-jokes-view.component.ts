import { Component } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { Joke } from '@common/models/joke.model';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'jokes-my-jokes-view',
  templateUrl: './my-jokes-view.component.html',
  styleUrls: ['./my-jokes-view.component.scss'],
})
export class MyJokesViewComponent {
  public myJokes$: Observable<Joke[]> = this.getJokes$();

  constructor(private activatedRoute: ActivatedRoute) {}

  private getJokes$(): Observable<Joke[]> {
    return this.activatedRoute.data.pipe(map(({ myJokes }: Data): Joke[] => myJokes));
  }
}

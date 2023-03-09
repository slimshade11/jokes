import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { Joke } from '@app/common/models/joke.model';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'jokes-jokes-view',
  templateUrl: './jokes-view.component.html',
  styleUrls: ['./jokes-view.component.scss'],
})
export class JokesViewComponent {
  public jokes$: Observable<Joke[]> = this.getJokes$();

  constructor(private activatedRoute: ActivatedRoute) {}

  private getJokes$(): Observable<Joke[]> {
    return this.activatedRoute.data.pipe(map(({ jokes }: Data): Joke[] => jokes));
  }
}

import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { Joke } from '@common/models/joke.model';
import { JokesSelectors, JokesActions } from '@app/store/jokes';
import { Store } from '@ngrx/store';
import { debounceTime, tap, filter, take } from 'rxjs';

export const myJokesResolver: ResolveFn<Joke[]> = () => {
  const store = inject(Store);

  return store.select(JokesSelectors.myJokes).pipe(
    // fake loading
    debounceTime(500),
    tap((myJokes: Joke[] | null): void => {
      !myJokes && store.dispatch(JokesActions.getJokes());
    }),
    filter(Boolean)
  );
};

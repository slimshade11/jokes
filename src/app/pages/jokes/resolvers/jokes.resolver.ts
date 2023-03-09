import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { Joke } from '@app/common/models/joke.model';
import { JokesSelectors, JokesActions } from '@app/store/jokes';
import { Store } from '@ngrx/store';
import { debounceTime, tap, filter, take } from 'rxjs';

export const jokesResolver: ResolveFn<Joke[]> = () => {
  const store = inject(Store);

  return store.select(JokesSelectors.jokes).pipe(
    debounceTime(500),
    tap((jokes: Joke[] | null): void => {
      !jokes && store.dispatch(JokesActions.getJokes());
    }),
    filter(Boolean),
    take(1)
  );
};

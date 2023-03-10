import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { Joke } from '@common/models/joke.model';
import { JokesSelectors, JokesActions } from '@store/jokes';
import { Store } from '@ngrx/store';
import { debounceTime, tap } from 'rxjs';

export const myJokesResolver: ResolveFn<Joke[]> = () => {
  const store: Store = inject(Store);

  return store.select(JokesSelectors.myJokes).pipe(
    // Approach with resolver isn't good when view contains only one piece of data on particular view
    // To see result of data manipulation (add/remove) we have to reload page
    // It didn't come to my mind when I was organizing my work
    debounceTime(500),
    tap((myJokes: Joke[]): void => {
      !myJokes && store.dispatch(JokesActions.getJokes());
    })
  );
};

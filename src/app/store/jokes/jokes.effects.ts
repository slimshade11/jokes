import { inject, Injectable } from '@angular/core';
import { ToastService } from '@common/services/toast.service';
import { Joke } from '@common/models/joke.model';
import { JokesService } from '@jokes/services/jokes.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { JokesActions, JokesSelectors } from '@store/jokes';
import { catchError, EMPTY, map, of, switchMap, take, tap } from 'rxjs';
import { ToastStatus } from '@common/enums/toast-status.enum';
import { PersistanceService } from '@common/services/persistance.service';
import { Store } from '@ngrx/store';

@Injectable()
export class JokesEffects {
  private actions$: Actions = inject(Actions);
  private jokesService: JokesService = inject(JokesService);
  private toastService: ToastService = inject(ToastService);
  private persistanceService: PersistanceService = inject(PersistanceService);
  private store: Store = inject(Store);

  getJokes$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(JokesActions.getJokes),
      switchMap(() => {
        return this.jokesService.getJokes$().pipe(
          map((jokes: Joke[]) => {
            return JokesActions.getJokesSuccess({ jokes });
          }),
          catchError(() => {
            this.toastService.showMessage(ToastStatus.ERROR, 'Błąd', 'Wystąpił problem przy pobieraniu danych z bazy');
            return of(JokesActions.getJokesFailure());
          })
        );
      })
    );
  });

  getMyJokes$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(JokesActions.getMyJokes),
      switchMap(() => {
        const myJokes: Joke[] = this.persistanceService.get('myJokes') ?? [];

        return of(myJokes).pipe(
          map((myJokes: Joke[]) => {
            return JokesActions.getMyJokesSuccess({ myJokes });
          }),
          catchError(() => {
            this.toastService.showMessage(ToastStatus.ERROR, 'Błąd', 'Wystąpił problem przy pobieraniu danych z bazy');
            return of(JokesActions.getMyJokesFailure());
          })
        );
      })
    );
  });

  addJoke$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(JokesActions.addJoke),
        tap(({ myJoke }): void => {
          this.store
            .select(JokesSelectors.myJokes)
            .pipe(
              take(1),
              tap((myJokes: Joke[]): void => {
                console.log(myJokes);
                this.persistanceService.set('myJokes', myJokes);

                this.toastService.showMessage(ToastStatus.SUCCESS, 'Sukces', 'Twój żart został zapisany!');
              }),
              catchError(() => {
                this.toastService.showMessage(ToastStatus.ERROR, 'Błąd przy zapisaniu żartu', 'Twój żart nie został zapisany!');
                return EMPTY;
              })
            )
            .subscribe();
        })
      );
    },
    { dispatch: false }
  );

  removeJoke$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(JokesActions.removeJoke),
        tap((): void => {
          this.store
            .select(JokesSelectors.myJokes)
            .pipe(
              take(1),
              tap((myJokes: Joke[]): void => {
                console.log(myJokes);
                this.persistanceService.set('myJokes', myJokes);

                this.toastService.showMessage(ToastStatus.SUCCESS, 'Sukces', 'Twój żart został usunięty!');
              }),
              catchError(() => {
                this.toastService.showMessage(ToastStatus.ERROR, 'Błąd przy usuwaniu żartu', 'Twój żart nie został usunięty!');
                return EMPTY;
              })
            )
            .subscribe();
        })
      );
    },
    { dispatch: false }
  );
}

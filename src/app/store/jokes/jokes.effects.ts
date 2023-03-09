import { inject, Injectable } from '@angular/core';
import { ToastService } from '@common/services/toast.service';
import { Joke } from '@common/models/joke.model';
import { JokesService } from '@jokes/services/jokes.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { JokesActions } from '@store/jokes';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { ToastStatus } from '@common/enums/toast-status.enum';
import { PersistanceService } from '@common/services/persistance.service';

@Injectable()
export class JokesEffects {
  private actions$: Actions = inject(Actions);
  private jokesService: JokesService = inject(JokesService);
  private toastService: ToastService = inject(ToastService);
  private persistanceService: PersistanceService = inject(PersistanceService);

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
        const myJokes: Joke[] = this.persistanceService.get('myJokes');

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
        tap((): void => {
          this.toastService.showMessage(ToastStatus.SUCCESS, 'Sukces', 'Twój żart został dodany!');
        })
      );
    },
    { dispatch: false }
  );
}

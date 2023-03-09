import { inject, Injectable } from '@angular/core';
import { ToastService } from '@common/services/toast.service';
import { Joke } from '@common/models/joke.model';
import { JokesService } from '@jokes/services/jokes.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { JokesActions } from '@store/jokes';
import { catchError, map, of, switchMap } from 'rxjs';
import { ToastStatus } from '@app/common/enums/toast-status.enum';

@Injectable()
export class JokesEffects {
  private actions$: Actions = inject(Actions);
  private jokesService: JokesService = inject(JokesService);
  private toastService: ToastService = inject(ToastService);

  getJokes$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(JokesActions.getJokes),
      switchMap(() => {
        return this.jokesService.getJokes$().pipe(
          map((jokes: Joke[]) => {
            return JokesActions.getJokesSuccess({ jokes });
          }),
          catchError((err) => {
            this.toastService.showMessage(ToastStatus.ERROR, 'Błąd', 'Wystąpił problem przy pobieraniu danych z bazy');
            return of(JokesActions.getJokesFailure());
          })
        );
      })
    );
  });
}

import { Component } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { Joke } from '@common/models/joke.model';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { map, Observable, take, takeUntil, tap } from 'rxjs';
import { AddJokeDialogComponent } from '@jokes/components/add-joke-dialog/add-joke-dialog.component';
import { DestroyComponent } from '@standalone/components/destroy/destroy.component';
import { Store } from '@ngrx/store';
import { JokesActions, JokesSelectors } from '@store/jokes';
import { PersistanceService } from '@common/services/persistance.service';

@Component({
  selector: 'jokes-jokes-view',
  templateUrl: './jokes-view.component.html',
})
export class JokesViewComponent extends DestroyComponent {
  public jokes$: Observable<Joke[]> = this.getJokes$();

  constructor(
    private activatedRoute: ActivatedRoute,
    private dialogService: DialogService,
    private store: Store,
    private persistanceService: PersistanceService
  ) {
    super();
  }

  private getJokes$(): Observable<Joke[]> {
    return this.activatedRoute.data.pipe(map(({ jokes }: Data): Joke[] => jokes));
  }

  public openAddJokeDialog(): void {
    const dialogRef: DynamicDialogRef = this.dialogService.open(AddJokeDialogComponent, {
      header: 'Dodawanie żartu',
      closable: false,
      width: '60%',
    });

    dialogRef.onClose.pipe(takeUntil(this.destroy$)).subscribe({
      next: (myJoke: Joke): void => {
        this.store.dispatch(JokesActions.addJoke({ myJoke }));

        this.store
          .select(JokesSelectors.myJokes)
          .pipe(
            take(1),
            tap((myJokes: Joke[]): void => {
              this.persistanceService.set('myJokes', [...myJokes, myJoke]);
            })
          )
          .subscribe();
      },
    });
  }
}

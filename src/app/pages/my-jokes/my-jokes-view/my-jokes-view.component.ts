import { Component } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { AddJokeDialogComponent } from '@jokes/components/add-joke-dialog/add-joke-dialog.component';
import { Joke } from '@common/models/joke.model';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Observable, map, takeUntil } from 'rxjs';
import { Store } from '@ngrx/store';
import { JokesActions, JokesSelectors } from '@store/jokes';
import { DestroyComponent } from '@standalone/components/destroy/destroy.component';
import { RemoveJokeDialogComponent } from '@my-jokes/components/remove-joke-dialog/remove-joke-dialog.component';

@Component({
  selector: 'jokes-my-jokes-view',
  templateUrl: './my-jokes-view.component.html',
  styleUrls: ['./my-jokes-view.component.scss'],
})
export class MyJokesViewComponent extends DestroyComponent {
  public myJokes$: Observable<Joke[]> = this.store.select(JokesSelectors.myJokes);

  constructor(private dialogService: DialogService, private store: Store) {
    super();
  }

  public openAddJokeDialog(): void {
    const dialogRef: DynamicDialogRef = this.dialogService.open(AddJokeDialogComponent, {
      header: 'Dodawanie żartu',
      closable: false,
      width: '60%',
    });

    dialogRef.onClose.pipe(takeUntil(this.destroy$)).subscribe({
      next: (myJoke: Joke): void => {
        if (myJoke) {
          this.store.dispatch(JokesActions.addJoke({ myJoke }));
        }
      },
    });
  }

  public openRemoveJokeDialog(jokeId: string): void {
    const dialogRef: DynamicDialogRef = this.dialogService.open(RemoveJokeDialogComponent, {
      header: 'Potwierdzenie',
      closable: false,
      width: '60%',
    });

    dialogRef.onClose.pipe(takeUntil(this.destroy$)).subscribe({
      next: (isConfirmed): void => {
        if (isConfirmed) {
          this.store.dispatch(JokesActions.removeJoke({ jokeId }));
        }
      },
    });
  }
}

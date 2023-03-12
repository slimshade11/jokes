import { Component } from '@angular/core';
import { Joke } from '@common/models/joke.model';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { map, Observable, takeUntil } from 'rxjs';
import { AddJokeDialogComponent } from '@jokes/components/add-joke-dialog/add-joke-dialog.component';
import { DestroyComponent } from '@standalone/components/destroy/destroy.component';
import { Store } from '@ngrx/store';
import { JokesActions, JokesSelectors } from '@store/jokes';

@Component({
  selector: 'jokes-jokes-view',
  templateUrl: './jokes-view.component.html',
})
export class JokesViewComponent extends DestroyComponent {
  public jokes$: Observable<Joke[]> = this.store.select(JokesSelectors.jokes);

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
        myJoke && this.store.dispatch(JokesActions.addJoke({ myJoke }));
      },
    });
  }
}

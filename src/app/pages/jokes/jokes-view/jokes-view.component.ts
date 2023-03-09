import { Component } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { Joke } from '@common/models/joke.model';
import { DialogService } from 'primeng/dynamicdialog';
import { map, Observable } from 'rxjs';
import { AddJokeDialogComponent } from '@jokes/components/add-joke-dialog/add-joke-dialog.component';

@Component({
  selector: 'jokes-jokes-view',
  templateUrl: './jokes-view.component.html',
})
export class JokesViewComponent {
  public jokes$: Observable<Joke[]> = this.getJokes$();

  constructor(private activatedRoute: ActivatedRoute, private dialogService: DialogService) {}

  private getJokes$(): Observable<Joke[]> {
    return this.activatedRoute.data.pipe(map(({ jokes }: Data): Joke[] => jokes));
  }

  public openAddJokeDialog(): void {
    const dialogRef = this.dialogService.open(AddJokeDialogComponent, {
      header: 'Dodawanie żartu',
      closable: false,
      width: '60%',
    });
  }
}

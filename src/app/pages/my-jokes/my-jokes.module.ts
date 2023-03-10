import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyJokesRoutingModule } from '@my-jokes/my-jokes-routing.module';
import { MyJokesViewComponent } from '@my-jokes/my-jokes-view/my-jokes-view.component';
import { JokeComponent } from '@my-jokes/components/joke/joke.component';
import { DialogService } from 'primeng/dynamicdialog';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CategoryDirPipe } from '@standalone/pipes/category-dir.pipe';
import { RemoveJokeDialogComponent } from '@my-jokes/components/remove-joke-dialog/remove-joke-dialog.component';

const declarations: Array<any> = [MyJokesViewComponent, JokeComponent, RemoveJokeDialogComponent];
const imports: Array<any> = [CommonModule, MyJokesRoutingModule, ButtonModule, CardModule, CategoryDirPipe];
const providers: Array<any> = [DialogService];

@NgModule({ declarations, imports, providers })
export class MyJokesModule {}

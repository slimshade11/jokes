import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JokesRoutingModule } from '@jokes/jokes-routing.module';
import { JokesViewComponent } from '@jokes/jokes-view/jokes-view.component';
import { CarouselModule } from 'primeng/carousel';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';
import { CarouselComponent } from '@jokes/components/carousel/carousel.component';
import { AddJokeDialogComponent } from '@jokes/components/add-joke-dialog/add-joke-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CategoryDirPipe } from '@standalone/category-dir.pipe';

const declarations: Array<any> = [JokesViewComponent, CarouselComponent, AddJokeDialogComponent];
const imports: Array<any> = [
  CommonModule,
  JokesRoutingModule,
  CarouselModule,
  CardModule,
  ButtonModule,
  DynamicDialogModule,
  DropdownModule,
  ReactiveFormsModule,
  InputTextareaModule,
  CategoryDirPipe,
];
const providers: Array<any> = [DialogService];

@NgModule({ declarations, imports, providers })
export class JokesModule {}

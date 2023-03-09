import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyJokesRoutingModule } from '@my-jokes/my-jokes-routing.module';
import { MyJokesViewComponent } from '@my-jokes/my-jokes-view/my-jokes-view.component';
import { JokeComponent } from '@my-jokes/components/joke/joke.component';
import { CarouselModule } from 'primeng/carousel';

const declarations: Array<any> = [MyJokesViewComponent, JokeComponent];
const imports: Array<any> = [CommonModule, MyJokesRoutingModule, CarouselModule];

@NgModule({ declarations, imports })
export class MyJokesModule {}

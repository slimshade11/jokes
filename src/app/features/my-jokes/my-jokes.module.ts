import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyJokesRoutingModule } from '@my-jokes/my-jokes-routing.module';
import { MyJokesViewComponent } from '@my-jokes/my-jokes-view/my-jokes-view.component';

const declarations: Array<any> = [MyJokesViewComponent];
const imports: Array<any> = [CommonModule, MyJokesRoutingModule];

@NgModule({ declarations, imports })
export class MyJokesModule {}

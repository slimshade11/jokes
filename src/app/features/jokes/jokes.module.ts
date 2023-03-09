import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JokesRoutingModule } from '@jokes/jokes-routing.module';
import { JokesViewComponent } from '@jokes/jokes-view/jokes-view.component';

const declarations: Array<any> = [JokesViewComponent];
const imports: Array<any> = [CommonModule, JokesRoutingModule];

@NgModule({ declarations, imports })
export class JokesModule {}

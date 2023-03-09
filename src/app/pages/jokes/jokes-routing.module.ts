import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JokesViewComponent } from '@jokes/jokes-view/jokes-view.component';

const routes: Routes = [
  {
    path: '',
    component: JokesViewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JokesRoutingModule {}

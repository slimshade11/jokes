import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyJokesViewComponent } from '@my-jokes/my-jokes-view/my-jokes-view.component';

const routes: Routes = [
  {
    path: '',
    component: MyJokesViewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyJokesRoutingModule {}

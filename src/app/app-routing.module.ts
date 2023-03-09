import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JokesModule } from '@jokes/jokes.module';
import { MyJokesModule } from '@my-jokes/my-jokes.module';
import { jokesResolver } from '@jokes/resolvers/jokes.resolver';

const routes: Routes = [
  {
    path: '',
    loadChildren: (): Promise<any> => import('@jokes/jokes.module').then(({ JokesModule }): JokesModule => JokesModule),
    resolve: { jokes: jokesResolver },
  },
  {
    path: 'my-jokes',
    loadChildren: (): Promise<any> => import('@my-jokes/my-jokes.module').then(({ MyJokesModule }): MyJokesModule => MyJokesModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

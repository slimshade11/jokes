import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <jokes-navbar></jokes-navbar>

    <router-outlet></router-outlet>
  `,
})
export class AppComponent {
  title = 'jokes';
}

import { Component, inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ResolveLoaderService } from '@common/services/resolve-loader.service';
import { JokesActions } from '@store/jokes';

@Component({
  selector: 'app-root',
  template: `
    <div class="fixed h-[.25rem] top-0 left-0 right-0 overflow-hidden">
      <p-progressBar *ngIf="isLoading$ | async" mode="indeterminate" class="h-full"></p-progressBar>
    </div>

    <jokes-navbar></jokes-navbar>

    <router-outlet></router-outlet>
  `,
})
export class AppComponent implements OnInit {
  private store: Store = inject(Store);
  private resolveLoaderService = inject(ResolveLoaderService);

  public isLoading$: Observable<boolean> = this.resolveLoaderService.handleLoaderVisibility$();

  public ngOnInit(): void {
    this.store.dispatch(JokesActions.getJokes());
  }
}

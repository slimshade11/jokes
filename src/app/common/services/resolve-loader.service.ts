import { inject, Injectable } from '@angular/core';
import { Router, ResolveStart, ResolveEnd } from '@angular/router';
import { Observable, filter, map, merge } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ResolveLoaderService {
  private router: Router = inject(Router);

  public handleLoaderVisibility$(): Observable<boolean> {
    const showLoader$: Observable<boolean> = this.router.events.pipe(
      filter((event: any): boolean => event instanceof ResolveStart),
      map((): boolean => true)
    );

    const hideLoader$: Observable<boolean> = this.router.events.pipe(
      filter((event: any): boolean => event instanceof ResolveEnd),
      map((): boolean => false)
    );

    return merge(hideLoader$, showLoader$);
  }
}

import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Joke } from '@common/models/joke.model';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class JokesService {
  private http: HttpClient = inject(HttpClient);

  public getJokes$(): Observable<Joke[]> {
    return this.http.get<Joke[]>('assets/meta/jokes.json');
  }
}

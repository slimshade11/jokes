import { Joke } from '@common/models/joke.model';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { FeatureKey, State as JokesState } from '@store/jokes';

const JokesStateSelector = createFeatureSelector<JokesState>(FeatureKey);

export const jokes = createSelector(JokesStateSelector, ({ jokes }: JokesState): Joke[] => jokes);
export const myJokes = createSelector(JokesStateSelector, ({ myJokes }: JokesState): Joke[] => myJokes);
export const isLoading = createSelector(JokesStateSelector, ({ isLoading }: JokesState): boolean => isLoading);

import { Joke } from '@app/common/models/joke.model';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { FeatureKey, State as JokesState } from '@store/jokes';

export const JokesStateSelector = createFeatureSelector<JokesState>(FeatureKey);

export const jokes = createSelector(JokesStateSelector, ({ jokes }: JokesState): Joke[] | null => jokes);
export const isLoading = createSelector(JokesStateSelector, ({ isLoading }: JokesState): boolean => isLoading);

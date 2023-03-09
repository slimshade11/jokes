import { Joke } from '@app/common/models/joke.model';
import { createReducer, on } from '@ngrx/store';
import { JokesActions } from '@store/jokes';

export const FeatureKey = 'jokes';

export interface State {
  jokes: Joke[] | null;
  myJokes: Joke[] | null;
  isLoading: boolean;
}

const inialState: State = {
  jokes: null,
  myJokes: null,
  isLoading: false,
};

export const Reducer = createReducer(
  inialState,
  on(JokesActions.getJokes, (state) => {
    return { ...state, isLoading: true };
  }),
  on(JokesActions.getJokesSuccess, (state, { jokes }) => {
    return { ...state, jokes, isLoading: false };
  }),
  on(JokesActions.getJokesFailure, (state) => {
    return { ...state, isLoading: false };
  })
);

import { Joke } from '@common/models/joke.model';
import { createReducer, on } from '@ngrx/store';
import { JokesActions } from '@store/jokes';

export const FeatureKey = 'jokes';

export interface State {
  jokes: Joke[];
  myJokes: Joke[];
  isLoading: boolean;
}

const inialState: State = {
  jokes: [],
  myJokes: [],
  isLoading: false,
};

export const Reducer = createReducer(
  inialState,

  // get jokes
  on(JokesActions.getJokes, (state) => {
    return { ...state, isLoading: true };
  }),
  on(JokesActions.getJokesSuccess, (state, { jokes }) => {
    return { ...state, jokes, isLoading: false };
  }),
  on(JokesActions.getJokesFailure, (state) => {
    return { ...state, isLoading: false };
  }),

  //get my jokes
  on(JokesActions.getMyJokes, (state) => {
    return { ...state, isLoading: true };
  }),
  on(JokesActions.getMyJokesSuccess, (state, { myJokes }) => {
    return { ...state, myJokes, isLoading: false };
  }),
  on(JokesActions.getMyJokesFailure, (state) => {
    return { ...state, isLoading: false };
  }),

  // add joke
  on(JokesActions.addJoke, (state, { myJoke }) => {
    return { ...state, myJokes: [...state.myJokes, myJoke] };
  }),

  // remove joke
  on(JokesActions.removeJoke, (state, { jokeId }) => {
    const myFilteredJokes: Joke[] = state.myJokes.filter((joke: Joke): boolean => joke.id !== jokeId);
    return { ...state, myJokes: myFilteredJokes };
  })
);

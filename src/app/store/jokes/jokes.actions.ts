import { Joke } from '@common/models/joke.model';
import { createAction, props } from '@ngrx/store';
import { JokesAcionTypes } from '@store/jokes/jokes-action-types';

export const getJokes = createAction(JokesAcionTypes.GET_JOKES);
export const getJokesSuccess = createAction(JokesAcionTypes.GET_JOKES_SUCCESS, props<{ jokes: Joke[] }>());
export const getJokesFailure = createAction(JokesAcionTypes.GET_JOKES_FAILURE);

export const getMyJokes = createAction(JokesAcionTypes.GET_MY_JOKES);
export const getMyJokesSuccess = createAction(JokesAcionTypes.GET_MY_JOKES_SUCCESS, props<{ myJokes: Joke[] }>());
export const getMyJokesFailure = createAction(JokesAcionTypes.GET_MY_JOKES_FAILURE);

export const addJoke = createAction(JokesAcionTypes.ADD_JOKE, props<{ myJoke: Joke }>());

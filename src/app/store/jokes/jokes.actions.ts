import { Joke } from '@app/common/models/joke.model';
import { createAction, props } from '@ngrx/store';
import { JokesAcionTypes } from '@store/jokes/jokes-action-types';

export const getJokes = createAction(JokesAcionTypes.GET_JOKES);
export const getJokesSuccess = createAction(JokesAcionTypes.GET_JOKES_SUCCESS, props<{ jokes: Joke[] }>());
export const getJokesFailure = createAction(JokesAcionTypes.GET_JOKES_FAILURE);

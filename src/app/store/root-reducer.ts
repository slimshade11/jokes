import { InjectionToken } from '@angular/core';
import { Action, ActionReducerMap } from '@ngrx/store';
import * as fromJokes from '@store/jokes';

export interface AppState {
  [fromJokes.FeatureKey]: fromJokes.State;
}

export const ROOT_REDUCER_TOKEN: string = 'Root reducers token';

export const ROOT_REDUCERS = new InjectionToken<ActionReducerMap<AppState>>(ROOT_REDUCER_TOKEN, {
  factory: (): ActionReducerMap<AppState, Action> => ({
    [fromJokes.FeatureKey]: fromJokes.Reducer,
  }),
});

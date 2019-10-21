import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import * as fromAuth from './auth.reducer';
import * as fromCourse from './course.reducer';
import { InjectionToken } from '@angular/core';

export interface State {

  [fromAuth.authFeatureKey]: fromAuth.State;
  [fromCourse.courseFeatureKey]: fromCourse.State;
}

export const reducers: ActionReducerMap<State> = {

  [fromAuth.authFeatureKey]: fromAuth.reducer,
  [fromCourse.courseFeatureKey]: fromCourse.reducer,
};


export const reducerToken = new InjectionToken<ActionReducerMap<State>>('Registered Reducers');

export const reducerProvider = [
  { provide: reducerToken, useValue: reducers },
];

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

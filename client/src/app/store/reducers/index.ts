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

  auth: fromAuth.State;
  course: fromCourse.State;
}

export const reducers: ActionReducerMap<State> = {

  auth: fromAuth.reducer,
  course: fromCourse.reducer,
};


export const reducerToken = new InjectionToken<ActionReducerMap<State>>('Registered Reducers');

export const reducerProvider = [
  { provide: reducerToken, useValue: reducers },
];

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

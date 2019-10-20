import { Action } from '@ngrx/store';


export const authFeatureKey = 'auth';

export interface State {
  user: object;
}

export const initialState: State = {
  user: null
};

export function reducer(state = initialState, action: Action): State {
  switch (action.type) {

    default:
      return state;
  }
}

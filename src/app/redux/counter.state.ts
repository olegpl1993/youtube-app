import { createReducer, on } from '@ngrx/store';
import { createAction } from '@ngrx/store';

export interface CounterState {
  count: number;
}

export const initialState = 0;

export const increment = createAction('Increment');
export const decrement = createAction('Decrement');

export const counterReducer = createReducer(
  initialState,
  on(increment, (state) => state + 1),
  on(decrement, (state) => state - 1),
);

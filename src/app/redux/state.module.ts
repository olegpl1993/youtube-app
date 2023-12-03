import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter/counter.state';

export const counterFeatureKey = 'counter';

export const stateModule = StoreModule.forFeature('counter', {
  counter: counterReducer,
});

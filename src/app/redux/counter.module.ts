import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter.state';

export const counterFeatureKey = 'counter';

export const counterModule = StoreModule.forFeature('counter', {
  counter: counterReducer,
});

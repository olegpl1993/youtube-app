import { StoreModule } from '@ngrx/store';
import { youtubeReducer } from './youtube/youtube.state';

export const counterFeatureKey = 'counter';

export const stateModule = StoreModule.forFeature('counter', {
  youtube: youtubeReducer,
});

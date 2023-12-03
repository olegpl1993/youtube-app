import { createActionGroup, createReducer, on, props } from '@ngrx/store';
import { SearchItem, SearchResultList } from './state.models';

export interface YoutubeState {
  data: SearchResultList | null;
  renderData: SearchItem[];
  searchInput: string;
  tempInput: string;
  sortingInput: string;
  sortKey: string | null;
}

export const initialState: YoutubeState = {
  data: null,
  renderData: [],
  searchInput: '',
  tempInput: '',
  sortingInput: '',
  sortKey: null,
};

export const YoutubeActions = createActionGroup({
  source: 'Youtube',
  events: {
    'UpdateSearchInput': props<{ searchInput: string }>(),
  },
});

export const youtubeReducer = createReducer(
  initialState,
  on(YoutubeActions.updateSearchInput, (state, { searchInput }) => {
    console.log('searchInput', searchInput);
    console.log('state', state);
    return { ...state, searchInput };
  })
);

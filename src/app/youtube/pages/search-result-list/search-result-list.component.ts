import { Component, OnDestroy, OnInit } from '@angular/core';
import { SearchItem } from 'src/app/redux/state.models';
import SortKey from 'src/shared/enums/sort-key.enum';
import { Observable, Subscription } from 'rxjs';
import YoutubeService from '../../services/youtube.service';
import { Store } from '@ngrx/store';
import { decrement, increment } from 'src/app/redux/counter.state';

@Component({
  selector: 'app-search-result-list',
  templateUrl: './search-result-list.component.html',
  styleUrls: ['./search-result-list.component.scss'],
})
export default class SearchResultListComponent implements OnInit, OnDestroy {
  public searchResults: SearchItem[] = [];
  public sortKey: SortKey | null = null;
  public sortingInput = '';
  private subscriptions: Subscription[] = [];
  count$: Observable<number>;

  constructor(
    private youtubeService: YoutubeService,
    private store: Store<{ count: number }>
  ) {
    this.count$ = store.select('count');
    this.count$.subscribe((value) => console.log(value));
  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  ngOnInit() {
    this.subscriptions.push(
      this.youtubeService.renderData$.subscribe((searchResults) => {
        this.searchResults = searchResults;
      })
    );

    this.subscriptions.push(
      this.youtubeService.sortKey$.subscribe((sortKey) => {
        this.sortKey = sortKey;
      })
    );

    this.subscriptions.push(
      this.youtubeService.sortingInput$.subscribe((sortingInput) => {
        this.sortingInput = sortingInput;
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}

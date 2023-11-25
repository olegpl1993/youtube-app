import { Component, OnDestroy, OnInit } from '@angular/core';
import { SearchItem } from 'src/app/redux/state.models';
import SortKey from 'src/shared/enums/sort-key.enum';
import { Subscription } from 'rxjs';
import YoutubeService from '../../services/youtube.service';

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

  constructor(private youtubeService: YoutubeService) {}

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

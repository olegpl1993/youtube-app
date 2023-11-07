import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import SortService from 'src/app/youtube/services/sort.service';
import SortKey from 'src/shared/enums/sort-key.enum';
import {
  SearchItem,
  SearchResultList,
} from 'src/shared/models/search-result.model';
import ApiService from 'src/shared/sevices/api.service';

@Injectable({
  providedIn: 'root',
})
export default class YoutubeService {
  constructor(
    private apiService: ApiService,
    private sortService: SortService
  ) {
    this.apiService.getData().subscribe((data) => {
      this.data = data;
    });
  }

  public data: SearchResultList | null = null;
  public searchResults: SearchItem[] = [];

  private renderDataSubject = new BehaviorSubject<SearchItem[]>([]);
  renderData$ = this.renderDataSubject.asObservable();

  private searchInputSubject = new BehaviorSubject('');
  updateSearchInput(newValue: string) {
    this.searchInputSubject.next(newValue);
  }

  private sortingInputSubject = new BehaviorSubject('');
  sortingInput$ = this.sortingInputSubject.asObservable();
  updateSortingInput(newValue: string) {
    this.sortingInputSubject.next(newValue);
  }

  private sortKeySubject = new BehaviorSubject<SortKey | null>(null);
  sortKey$ = this.sortKeySubject.asObservable();
  updateSortKey(sortKey: SortKey) {
    this.sortKeySubject.next(sortKey);
    this.createRenderData();
  }

  createRenderData() {
    const sortKey = this.sortKeySubject.getValue();
    if (sortKey === null) {
      this.renderDataSubject.next(this.searchResults);
      return;
    }
    this.renderDataSubject.next(
      this.sortService.sorter(this.searchResults, sortKey)
    );
  }

  handleSearch(): void {
    const searchInput = this.searchInputSubject.getValue();
    const items = this.data ? this.data.items : [];
    if (searchInput.length === 0) {
      this.searchResults = items;
    } else {
      this.searchResults = items.filter((item) =>
        item.snippet.title.toLowerCase().includes(searchInput.toLowerCase())
      );
    }
    this.createRenderData();
  }
}

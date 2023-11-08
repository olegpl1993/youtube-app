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
      this.dataSubject.next(data);
    });
  }

  private dataSubject = new BehaviorSubject<SearchResultList | null>(null);
  data$ = this.dataSubject.asObservable();

  private searchResultsSubject = new BehaviorSubject<SearchItem[]>([]);

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
    if (sortKey === null)
      this.renderDataSubject.next(this.searchResultsSubject.getValue());
    else
      this.renderDataSubject.next(
        this.sortService.sorter(this.searchResultsSubject.getValue(), sortKey)
      );
  }

  handleSearch(): void {
    const data = this.dataSubject.getValue();
    const searchInput = this.searchInputSubject.getValue();
    const items = data ? data.items : [];
    if (searchInput.length === 0) this.searchResultsSubject.next(items);
    else
      this.searchResultsSubject.next(
        items.filter((item) =>
          item.snippet.title.toLowerCase().includes(searchInput.toLowerCase())
        )
      );
    this.createRenderData();
  }
}

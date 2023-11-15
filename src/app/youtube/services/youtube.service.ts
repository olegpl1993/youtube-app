import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import SortService from 'src/app/youtube/services/sort.service';
import SortKey from 'src/shared/enums/sort-key.enum';
import {
  SearchItem,
  SearchResultList,
} from 'src/shared/models/search-result.model';
import ApiService from 'src/app/core/services/api.service';

@Injectable({
  providedIn: 'root',
})
export default class YoutubeService {
  constructor(
    private apiService: ApiService,
    private sortService: SortService
  ) {
    this.apiService.getData().subscribe((data) => {
      this.dataSource.next(data);
    });
  }

  private dataSource = new BehaviorSubject<SearchResultList | null>(null);
  data$ = this.dataSource.asObservable();

  private searchResultsSource = new BehaviorSubject<SearchItem[]>([]);

  private renderDataSource = new BehaviorSubject<SearchItem[]>([]);
  renderData$ = this.renderDataSource.asObservable();

  private searchInputSource = new BehaviorSubject('');
  updateSearchInput(newValue: string) {
    this.searchInputSource.next(newValue);
  }

  private sortingInputSource = new BehaviorSubject('');
  sortingInput$ = this.sortingInputSource.asObservable();
  updateSortingInput(newValue: string) {
    this.sortingInputSource.next(newValue);
  }

  private sortKeySource = new BehaviorSubject<SortKey | null>(null);
  sortKey$ = this.sortKeySource.asObservable();
  updateSortKey(sortKey: SortKey) {
    this.sortKeySource.next(sortKey);
    this.createRenderData();
  }

  createRenderData() {
    const sortKey = this.sortKeySource.getValue();
    if (sortKey === null)
      this.renderDataSource.next(this.searchResultsSource.getValue());
    else
      this.renderDataSource.next(
        this.sortService.sorter(this.searchResultsSource.getValue(), sortKey)
      );
  }

  handleSearch(): void {
    const data = this.dataSource.getValue();
    const searchInput = this.searchInputSource.getValue();
    const items = data ? data.items : [];
    if (searchInput.length === 0) this.searchResultsSource.next(items);
    else
      this.searchResultsSource.next(
        items.filter((item) =>
          item.snippet.title.toLowerCase().includes(searchInput.toLowerCase())
        )
      );
    this.createRenderData();
  }
}

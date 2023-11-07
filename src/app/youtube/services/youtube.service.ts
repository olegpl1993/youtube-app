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
  private renderDataSubject = new BehaviorSubject<SearchItem[]>([]);

  renderData$ = this.renderDataSubject.asObservable();

  updateRenderData(newValue: SearchItem[]) {
    this.renderDataSubject.next(newValue);
  }
  // ---------------------

  public data: SearchResultList | null = null;

  public searchResults: SearchItem[] = [];

  public renderData: SearchItem[] = [];

  public searchInput = '';

  public sortingInput = '';

  public sortKey: SortKey | null = null;

  constructor(
    private apiService: ApiService,
    private sortService: SortService
  ) {
    this.apiService.getData().subscribe((data) => {
      this.data = data;
      this.updateRenderData(this.data.items);
    });
  }

  handleSortKey(sortKey: SortKey) {
    this.sortKey = sortKey;
    this.createRenderData();
  }

  handleSortingInput(sortingInput: string) {
    this.sortingInput = sortingInput;
  }

  createRenderData() {
    if (this.sortKey === null) {
      this.renderData = this.searchResults;
      return;
    }
    this.renderData = this.sortService.sorter(this.searchResults, this.sortKey);
  }

  handleSearchInput(searchInput: string) {
    this.searchInput = searchInput;
  }

  handleSearch(): void {
    const items = this.data ? this.data.items : [];
    if (this.searchInput.length === 0) {
      this.searchResults = items;
    } else {
      this.searchResults = items.filter((item) =>
        item.snippet.title
          .toLowerCase()
          .includes(this.searchInput.toLowerCase())
      );
    }
    this.createRenderData();
  }
}

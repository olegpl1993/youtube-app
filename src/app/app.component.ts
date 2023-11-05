import { Component } from '@angular/core';
import {
  SearchItem,
  SearchResultList,
} from 'src/shared/models/search-result.model';
import ApiService from 'src/shared/sevices/api.service';
import SortKey from 'src/shared/enums/sort-key.enum';
import SortService from './youtube/services/sort.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export default class AppComponent {
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

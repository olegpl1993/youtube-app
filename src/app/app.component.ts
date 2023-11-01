import { Component } from '@angular/core';
import {
  SearchItem,
  SearchResultList,
} from 'src/shared/models/search-result.model';
import ApiService from 'src/shared/sevices/api.service';
import FilterPipe from './filter.pipe';
import SortService from './sort.service';

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

  public sorting = '';

  public sortingInput = '';

  constructor(
    private apiService: ApiService,
    private filterPipe: FilterPipe,
    private sortService: SortService
  ) {
    this.apiService.getData().subscribe((data) => {
      this.data = data;
    });
  }

  public processingMap = {
    '': () => this.searchResults,
    date: () => this.sortService.sorter(this.searchResults, 'date'),
    views: () => this.sortService.sorter(this.searchResults, 'views'),
    word: () =>
      this.filterPipe.transform(this.searchResults, this.sortingInput),
  };

  handleSortingInput(sortingInput: string) {
    this.sortingInput = sortingInput;
  }

  handleSorting(sorting: string) {
    this.sorting = sorting;
    this.renderData =
      this.processingMap[this.sorting as keyof typeof this.processingMap]();
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
    this.renderData =
      this.processingMap[this.sorting as keyof typeof this.processingMap]();
  }
}

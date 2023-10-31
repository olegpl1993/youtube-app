import { Component } from '@angular/core';
import {
  SearchItem,
  SearchResultList,
} from 'src/shared/models/search-result.model';
import ApiService from 'src/shared/sevices/api.service';
import FilterPipe from './filter.pipe';

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

  public sortingViewsUP = true;

  public sortingDateUP = true;

  constructor(private apiService: ApiService, private filterPipe: FilterPipe) {
    this.apiService.getData().subscribe((data) => {
      this.data = data;
    });
  }

  public sortingMap = {
    '': () => {
      this.renderData = this.searchResults;
    },
    date: () => this.sortByDate(),
    views: () => this.sortByViews(),
    word: () => {
      this.renderData = this.filterPipe.transform(
        this.searchResults,
        this.sortingInput
      );
    },
  };

  sortByDate(): void {
    if (this.sortingDateUP) {
      this.renderData = this.searchResults.sort(
        (a, b) =>
          new Date(b.snippet.publishedAt).getDate() -
          new Date(a.snippet.publishedAt).getDate()
      );
    } else {
      this.renderData = this.searchResults.sort(
        (a, b) =>
          new Date(a.snippet.publishedAt).getDate() -
          new Date(b.snippet.publishedAt).getDate()
      );
    }
    this.sortingDateUP = !this.sortingDateUP;
  }

  sortByViews(): void {
    if (this.sortingViewsUP) {
      this.renderData = this.searchResults.sort(
        (a, b) =>
          Number(b.statistics.viewCount) - Number(a.statistics.viewCount)
      );
    } else {
      this.renderData = this.searchResults.sort(
        (a, b) =>
          Number(a.statistics.viewCount) - Number(b.statistics.viewCount)
      );
    }
    this.sortingViewsUP = !this.sortingViewsUP;
  }

  handleSortingInput(sortingInput: string) {
    this.sortingInput = sortingInput;
    console.log(this.sortingInput);
  }

  handleSorting(sorting: string) {
    this.sorting = sorting;
    this.sortingMap[this.sorting as keyof typeof this.sortingMap]();
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
    this.sortingMap[this.sorting as keyof typeof this.sortingMap]();
  }
}

import { Component } from '@angular/core';
import {
  SearchItem,
  SearchResultList,
} from 'src/shared/models/search-result.model';
import ApiService from 'src/shared/sevices/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export default class AppComponent {
  public data: SearchResultList | null = null;

  public searchResults: SearchItem[] = [];

  public searchInput = '';

  handleSearchInput(searchInput: string) {
    this.searchInput = searchInput;
  }

  constructor(private apiService: ApiService) {
    this.apiService.getData().subscribe((data) => {
      this.data = data;
    });
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
  }
}

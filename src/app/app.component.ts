import { Component } from '@angular/core';
import { SearchItem, SearchResultList } from 'src/models/search-result.model';
import ApiService from 'src/sevices/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export default class AppComponent {
  public data: SearchResultList | null = null;

  public searchResults: SearchItem[] = [];

  constructor(private apiService: ApiService) {
    this.apiService.getData().subscribe((data) => {
      this.data = data;
    });
  }

  handleSearch(searchInput: string): void {
    const items = this.data ? this.data.items : [];
    console.log('searchInput test = ', searchInput);
    if (searchInput.length === 0) {
      this.searchResults = items;
    } else {
      this.searchResults = items.filter((item) =>
        item.snippet.title.toLowerCase().includes(searchInput.toLowerCase())
      );
    }
  }
}

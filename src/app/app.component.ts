import { Component } from '@angular/core';
import { SearchItem } from 'src/models/search-result.model';
import ApiService from 'src/sevices/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export default class AppComponent {
  public title = 'youtube';

  public searchResults: SearchItem[] = [];

  constructor(private apiService: ApiService) {
    this.apiService.getData().subscribe((data) => {
      this.searchResults = data.items;
    });
  }
}

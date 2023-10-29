import { Component, Input } from '@angular/core';
import { SearchItem } from 'src/shared/models/search-result.model';

@Component({
  selector: 'app-search-result-list',
  templateUrl: './search-result-list.component.html',
  styleUrls: ['./search-result-list.component.scss'],
})
export default class SearchResultListComponent {
  @Input() public searchResults: SearchItem[] = [];
}

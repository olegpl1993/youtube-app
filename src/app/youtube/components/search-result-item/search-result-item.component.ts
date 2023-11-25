import { Component, Input } from '@angular/core';
import { SearchItem } from 'src/app/redux/state.models';

@Component({
  selector: 'app-search-result-item',
  templateUrl: './search-result-item.component.html',
  styleUrls: ['./search-result-item.component.scss'],
})
export default class SearchResultItemComponent {
  @Input() public searchItem: SearchItem | null = null;
}

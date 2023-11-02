import { Component, Input } from '@angular/core';
import { SearchItem } from 'src/shared/models/search-result.model';

@Component({
  selector: 'app-search-result-item',
  templateUrl: './search-result-item.component.html',
  styleUrls: ['./search-result-item.component.scss'],
})
export default class SearchResultItemComponent {
  @Input() public searchItem: SearchItem | null = null;

  public test(): void {
    alert('go to next page!');
  }
}

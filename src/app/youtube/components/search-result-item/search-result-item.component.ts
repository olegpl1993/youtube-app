import { Component, Input } from '@angular/core';
import { SearchItem } from 'src/shared/models/search-result.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-result-item',
  templateUrl: './search-result-item.component.html',
  styleUrls: ['./search-result-item.component.scss'],
})
export default class SearchResultItemComponent {
  @Input() public searchItem: SearchItem | null = null;

  constructor(private router: Router) {}

  public handleClickMore(): void {
    this.router.navigate(['/details', this.searchItem?.id]);
  }
}

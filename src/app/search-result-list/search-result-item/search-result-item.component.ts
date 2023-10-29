import { Component, Input } from '@angular/core';
import { SearchItem } from 'src/shared/models/search-result.model';

@Component({
  selector: 'app-search-result-item',
  templateUrl: './search-result-item.component.html',
  styleUrls: ['./search-result-item.component.scss'],
})
export default class SearchResultItemComponent {
  @Input() public searchItem: SearchItem | null = null;

  public getColor(): string | null {
    const publishedAt = this.searchItem?.snippet?.publishedAt || '';
    const currentDate = new Date();
    const publishedDate = new Date(publishedAt);
    const timeDifference = currentDate.getTime() - publishedDate.getTime();
    const daysDifference = Math.floor(timeDifference / (1000 * 3600 * 24));

    if (daysDifference > 180) return 'red';
    if (daysDifference >= 30) return 'yellow';
    if (daysDifference >= 7) return 'green';
    return 'blue';
  }

  public test(): void {
    console.log('test');
    console.log(this.getColor());
  }
}

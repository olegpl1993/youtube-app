import { Injectable } from '@angular/core';
import { SearchItem } from 'src/shared/models/search-result.model';

@Injectable({
  providedIn: 'root',
})
export default class SortService {
  public sortDirection = true;

  public sorterMap = {
    date: (a: SearchItem, b: SearchItem) =>
      new Date(b.snippet.publishedAt).getTime() -
      new Date(a.snippet.publishedAt).getTime(),
    views: (a: SearchItem, b: SearchItem) =>
      Number(b.statistics.viewCount) - Number(a.statistics.viewCount),
  };

  sorter(searchResults: SearchItem[], sorting: string): SearchItem[] {
    this.sortDirection = !this.sortDirection;
    const result = searchResults.sort(
      this.sorterMap[sorting as keyof typeof this.sorterMap]
    );
    return this.sortDirection ? result : result.reverse();
  }
}

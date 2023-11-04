import { Injectable } from '@angular/core';
import SortKey from 'src/shared/enums/sort-key.enum';
import { SearchItem } from 'src/shared/models/search-result.model';

@Injectable({
  providedIn: 'root',
})
export default class SortService {
  public sorterMap: Record<SortKey, (a: SearchItem, b: SearchItem) => number> =
    {
      DateUP: (a: SearchItem, b: SearchItem) =>
        new Date(a.snippet.publishedAt).getTime() -
        new Date(b.snippet.publishedAt).getTime(),
      DateDOWN: (a: SearchItem, b: SearchItem) =>
        new Date(b.snippet.publishedAt).getTime() -
        new Date(a.snippet.publishedAt).getTime(),
      ViewsUP: (a: SearchItem, b: SearchItem) =>
        Number(a.statistics.viewCount) - Number(b.statistics.viewCount),
      ViewsDOWN: (a: SearchItem, b: SearchItem) =>
        Number(b.statistics.viewCount) - Number(a.statistics.viewCount),
      Word: () => 0,
    };

  sorter(searchResults: SearchItem[], sortKey: SortKey): SearchItem[] {
    return searchResults.sort(this.sorterMap[sortKey]);
  }
}

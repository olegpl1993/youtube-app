import { Pipe, PipeTransform } from '@angular/core';
import { SearchItem } from '../shared/models/search-result.model';

@Pipe({
  name: 'filter',
})
export default class FilterPipe implements PipeTransform {
  transform(items: SearchItem[], filter: string): SearchItem[] {
    if (!filter || filter.trim() === '') {
      return items;
    }

    return items.filter((item) =>
      item.snippet.tags.includes(filter.toLowerCase())
    );
  }
}

import { Pipe, PipeTransform } from '@angular/core';
import { SearchItem } from '../../redux/state.models';

@Pipe({
  name: 'filter',
})
export default class FilterPipe implements PipeTransform {
  transform(items: SearchItem[], filter: string): SearchItem[] {
    if (!filter || filter.trim() === '') {
      return items;
    }

    return items.filter((item) =>
      item.snippet.title.toLowerCase().includes(filter.toLowerCase())
    );
  }
}

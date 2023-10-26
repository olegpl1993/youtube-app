import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import SearchResultListComponent from './search-result-list.component';
import SearchResultItemComponent from './search-result-item/search-result-item.component';

@NgModule({
  declarations: [SearchResultListComponent, SearchResultItemComponent],
  imports: [CommonModule],
  exports: [SearchResultListComponent],
})
export default class SearchResultListModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import SearchResultListComponent from './search-result-list.component';
import SearchResultItemComponent from './search-result-item/search-result-item.component';

@NgModule({
  declarations: [SearchResultListComponent, SearchResultItemComponent],
  imports: [CommonModule, MatButtonModule],
  exports: [SearchResultListComponent],
})
export default class SearchResultListModule {}

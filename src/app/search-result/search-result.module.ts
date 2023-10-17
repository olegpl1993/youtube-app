import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import SearchResultComponent from './search-result.component';
import SearchResultCardComponent from './search-result-card/search-result-card.component';

@NgModule({
  declarations: [SearchResultComponent, SearchResultCardComponent],
  imports: [CommonModule],
})
export default class SearchResultModule {}

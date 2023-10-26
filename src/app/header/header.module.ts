import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import HeaderComponent from './header.component';
import SearchComponent from './search/search.component';
import SortComponent from './sort/sort.component';

@NgModule({
  declarations: [HeaderComponent, SearchComponent, SortComponent],
  imports: [CommonModule],
  exports: [HeaderComponent],
})
export default class HeaderModule {}

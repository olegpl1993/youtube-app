import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import ButtonComponent from '../../shared/button/button.component';
import TimeToColorDirective from './directives/time-to-color.directive';
import SearchResultListComponent from './components/search-result-list/search-result-list.component';
import SearchResultItemComponent from './components/search-result-item/search-result-item.component';

@NgModule({
  declarations: [
    SearchResultListComponent,
    SearchResultItemComponent,
    TimeToColorDirective,
  ],
  imports: [CommonModule, MatButtonModule, ButtonComponent],
  exports: [SearchResultListComponent],
})
export default class YoutubeModule {}

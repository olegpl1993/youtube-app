import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import ButtonComponent from '../../shared/button/button.component';
import TimeToColorDirective from './directives/time-to-color.directive';
import SearchResultListComponent from './pages/search-result-list/search-result-list.component';
import SearchResultItemComponent from './components/search-result-item/search-result-item.component';
import YoutubeRoutingModule from './youtube-routing.module';
import DetailsComponent from './pages/details/details.component';
import FilterPipe from './pipes/filter.pipe';

@NgModule({
  declarations: [
    SearchResultListComponent,
    SearchResultItemComponent,
    TimeToColorDirective,
    DetailsComponent,
    FilterPipe,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    ButtonComponent,
    YoutubeRoutingModule,
  ],
  exports: [SearchResultListComponent],
  providers: [FilterPipe],
})
export default class YoutubeModule {}

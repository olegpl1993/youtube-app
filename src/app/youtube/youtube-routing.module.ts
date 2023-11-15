import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import DetailsComponent from './pages/details/details.component';
import SearchResultListComponent from './pages/search-result-list/search-result-list.component';

const routes: Routes = [
  {
    path: '',
    component: SearchResultListComponent,
  },
  {
    path: 'details/:id',
    component: DetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export default class YoutubeRoutingModule {}

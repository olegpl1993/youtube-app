import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import YoutubeComponent from './pages/youtube/youtube.component';
import DetailsComponent from './pages/details/details.component';

const routes: Routes = [
  {
    path: '',
    component: YoutubeComponent,
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

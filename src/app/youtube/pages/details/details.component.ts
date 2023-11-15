import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchItem } from 'src/shared/models/search-result.model';
import YoutubeService from '../../services/youtube.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export default class DetailsComponent {
  public id = '';
  public searchItem: SearchItem | null = null;

  constructor(
    private route: ActivatedRoute,
    private youtubeService: YoutubeService
  ) {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
    });

    this.youtubeService.data$.subscribe((data) => {
      this.searchItem = data?.items.find((item) => item.id === this.id) || null;
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { SearchItem } from 'src/shared/models/search-result.model';
import YoutubeService from '../../services/youtube.service';

@Component({
  selector: 'app-search-result-list',
  templateUrl: './search-result-list.component.html',
  styleUrls: ['./search-result-list.component.scss'],
})
export default class SearchResultListComponent implements OnInit {
  public searchResults: SearchItem[] = [];

  constructor(private youtubeService: YoutubeService) {}

  ngOnInit() {
    this.youtubeService.renderData$.subscribe((searchResults) => {
      this.searchResults = searchResults;
    });
  }
}

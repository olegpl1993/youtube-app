import { Component, OnInit } from '@angular/core';
import { SearchItem } from 'src/shared/models/search-result.model';
import SortKey from 'src/shared/enums/sort-key.enum';
import YoutubeService from '../../services/youtube.service';

@Component({
  selector: 'app-search-result-list',
  templateUrl: './search-result-list.component.html',
  styleUrls: ['./search-result-list.component.scss'],
})
export default class SearchResultListComponent implements OnInit {
  public searchResults: SearchItem[] = [];
  public sortKey: SortKey | null = null;
  public sortingInput = '';

  constructor(private youtubeService: YoutubeService) {}

  ngOnInit() {
    this.youtubeService.renderData$.subscribe((searchResults) => {
      this.searchResults = searchResults;
    });

    this.youtubeService.sortKey$.subscribe((sortKey) => {
      this.sortKey = sortKey;
    });

    this.youtubeService.sortingInput$.subscribe((sortingInput) => {
      this.sortingInput = sortingInput;
    });
  }
}

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import SortService from 'src/app/youtube/services/sort.service';
import SortKey from 'src/shared/enums/sort-key.enum';
import { SearchItem, SearchResultList } from 'src/app/redux/state.models';
import ApiService from 'src/app/core/services/api.service';

@Injectable({
  providedIn: 'root',
})
export default class YoutubeService {
  constructor(
    private apiService: ApiService,
    private sortService: SortService
  ) {
    this.searchInputSource.subscribe((value) => {
      if (value.length > 2) {
        this.apiService
          .getData(this.searchInputSource.getValue())
          .subscribe((data) => {
            const videoIds = data.items
              .map((item) => item.id.videoId)
              .join(',');

            this.apiService.getMovieData(videoIds).subscribe((movieData) => {
              this.dataSource.next(movieData);
              this.createRenderData();
            });
          });
      }
    });
  }

  private dataSource = new BehaviorSubject<SearchResultList | null>(null);
  data$ = this.dataSource.asObservable();

  private renderDataSource = new BehaviorSubject<SearchItem[]>([]);
  renderData$ = this.renderDataSource.asObservable();

  private searchInputSource = new BehaviorSubject('');
  private tempInputSource = new BehaviorSubject('');
  private timer: ReturnType<typeof setTimeout> | undefined;
  updateSearchInput(newValue: string) {
    this.tempInputSource.next(newValue);
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      const tempValue = this.tempInputSource.getValue();
      this.searchInputSource.next(tempValue);
    }, 2000);
  }

  private sortingInputSource = new BehaviorSubject('');
  sortingInput$ = this.sortingInputSource.asObservable();
  updateSortingInput(newValue: string) {
    this.sortingInputSource.next(newValue);
  }

  private sortKeySource = new BehaviorSubject<SortKey | null>(null);
  sortKey$ = this.sortKeySource.asObservable();
  updateSortKey(sortKey: SortKey) {
    this.sortKeySource.next(sortKey);
    this.createRenderData();
  }

  createRenderData() {
    const sortKey = this.sortKeySource.getValue();
    if (sortKey === null) {
      this.renderDataSource.next(this.dataSource.getValue()?.items || []);
    } else {
      this.renderDataSource.next(
        this.sortService.sorter(
          this.dataSource.getValue()?.items || [],
          sortKey
        )
      );
    }
  }
}

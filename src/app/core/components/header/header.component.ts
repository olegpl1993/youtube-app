import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { debounce, interval } from 'rxjs';
import AuthService from 'src/app/auth/services/auth.service';
import {
  YoutubeActions,
  YoutubeState,
} from 'src/app/redux/youtube/youtube.state';
import YoutubeService from 'src/app/youtube/services/youtube.service';
import SortKey from 'src/shared/enums/sort-key.enum';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export default class HeaderComponent {
  constructor(
    private youtubeService: YoutubeService,
    private authService: AuthService,
    private store: Store<{ youtube: YoutubeState }>
  ) {
    this.formControlString.valueChanges
      .pipe(debounce(() => interval(2000)))
      .subscribe((value) => {
        if (value) {
          const newValue = String(value).trim();
          this.youtubeService.updateSearchInput(value);
          this.store.dispatch(
            YoutubeActions.updateSearchInput({ searchInput: newValue })
          );
        }
      });
  }

  public isOpenSort = false;
  public sortDirection = true;

  handleSortingInput(event: Event): void {
    if (event.target instanceof HTMLInputElement) {
      this.youtubeService.updateSortingInput(String(event.target.value).trim());
    }
  }

  handleSorting(sort: string) {
    if (sort === 'word') this.youtubeService.updateSortKey(SortKey.Word);
    if (sort === 'date' && this.sortDirection)
      this.youtubeService.updateSortKey(SortKey.DateUP);
    if (sort === 'views' && this.sortDirection)
      this.youtubeService.updateSortKey(SortKey.ViewsUP);
    if (sort === 'date' && !this.sortDirection)
      this.youtubeService.updateSortKey(SortKey.DateDOWN);
    if (sort === 'views' && !this.sortDirection)
      this.youtubeService.updateSortKey(SortKey.ViewsDOWN);
    this.sortDirection = !this.sortDirection;
  }

  public formControlString = new FormControl('');
  setOpenSort(): void {
    this.isOpenSort = !this.isOpenSort;
  }

  handleLogout() {
    this.authService.handleLogout();
  }

  getLoginFromToken(): string {
    const token = localStorage.getItem('authToken');
    if (token) {
      const tokenArr = token.split('&');
      return tokenArr[0];
    }
    return '';
  }
}

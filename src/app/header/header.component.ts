import { Component, Input } from '@angular/core';
import AppComponent from '../app.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export default class HeaderComponent {
  @Input() appComponent: AppComponent | undefined;

  public isOpenSort = false;

  public searchInput = '';

  setOpenSort(): void {
    this.isOpenSort = !this.isOpenSort;
  }

  test(): void {
    console.log('test');
  }

  handleSearchInput(event: Event): void {
    if (event.target instanceof HTMLInputElement) {
      this.searchInput = String(event.target.value).trim();
    }
  }

  handleSearch(): void {
    this.appComponent?.handleSearch(this.searchInput);
  }
}

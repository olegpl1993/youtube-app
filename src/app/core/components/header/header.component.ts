import { Component, EventEmitter, Output } from '@angular/core';
import SortKey from 'src/shared/enums/sort-key.enum';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export default class HeaderComponent {
  @Output() outputSearchInput = new EventEmitter<string>();

  @Output() outputSearch = new EventEmitter();

  @Output() outputSorting = new EventEmitter<string>();

  @Output() outputSortingInput = new EventEmitter<string>();

  @Output() outputSortKey = new EventEmitter<SortKey>();

  public isOpenSort = false;

  public sortDirection = true;

  public selectedButton: string | null = null;

  handleSortingInput(event: Event): void {
    if (event.target instanceof HTMLInputElement) {
      this.outputSortingInput.emit(String(event.target.value).trim());
    }
  }

  handleSorting(sort: string) {
    this.outputSorting.emit(sort);
    if (sort === 'word') this.outputSortKey.emit(SortKey.Word);
    if (sort === 'date' && this.sortDirection)
      this.outputSortKey.emit(SortKey.DateUP);
    if (sort === 'views' && this.sortDirection)
      this.outputSortKey.emit(SortKey.ViewsUP);
    if (sort === 'date' && !this.sortDirection)
      this.outputSortKey.emit(SortKey.DateDOWN);
    if (sort === 'views' && !this.sortDirection)
      this.outputSortKey.emit(SortKey.ViewsDOWN);
    this.sortDirection = !this.sortDirection;
  }

  handleSearchInput(event: Event): void {
    if (event.target instanceof HTMLInputElement) {
      this.outputSearchInput.emit(String(event.target.value).trim());
    }
  }

  handleSearch(): void {
    this.outputSearch.emit();
  }

  setOpenSort(): void {
    this.isOpenSort = !this.isOpenSort;
  }

  handleLogin(): void {
    alert('login');
  }
}

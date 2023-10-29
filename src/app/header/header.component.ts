import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export default class HeaderComponent {
  @Output() outputSearchInput = new EventEmitter<string>();

  @Output() outputSearch = new EventEmitter();

  public isOpenSort = false;

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

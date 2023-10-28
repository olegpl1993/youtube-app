import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export default class HeaderComponent {
  public isOpenSort = false;

  setOpenSort(): void {
    this.isOpenSort = !this.isOpenSort;
  }

  test(): void {
    console.log('test');
  }
}

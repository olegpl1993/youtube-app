import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import HeaderComponent from './header.component';
import ButtonComponent from '../../shared/button/button.component';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, ButtonComponent],
  exports: [HeaderComponent],
})
export default class HeaderModule {}

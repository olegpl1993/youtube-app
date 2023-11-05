import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import ButtonComponent from '../../shared/button/button.component';
import HeaderComponent from './components/header/header.component';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, ButtonComponent],
  exports: [HeaderComponent],
})
export default class CoreModule {}

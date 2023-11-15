import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import ButtonComponent from '../../shared/button/button.component';
import HeaderComponent from './components/header/header.component';
import AppRoutingModule from '../app-routing.module';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, ButtonComponent, AppRoutingModule],
  exports: [HeaderComponent],
})
export default class CoreModule {}

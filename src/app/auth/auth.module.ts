import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import ButtonComponent from 'src/shared/button/button.component';
import { ReactiveFormsModule } from '@angular/forms';
import AuthComponent from './components/auth/auth.component';
import AuthRoutingModule from './auth-routing.module';

@NgModule({
  declarations: [AuthComponent],
  imports: [CommonModule, AuthRoutingModule, ButtonComponent, ReactiveFormsModule],
  exports: [AuthComponent],
})
export default class AuthModule {}

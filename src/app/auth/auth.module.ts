import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import AuthComponent from './components/auth/auth.component';
import AuthRoutingModule from './auth-routing.module';

@NgModule({
  declarations: [AuthComponent],
  imports: [CommonModule, AuthRoutingModule],
  exports: [AuthComponent],
})
export default class AuthModule {}

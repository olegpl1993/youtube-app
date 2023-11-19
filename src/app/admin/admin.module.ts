import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import ButtonComponent from 'src/shared/button/button.component';
import { ReactiveFormsModule } from '@angular/forms';
import AdminComponent from './components/admin/admin.component';
import AdminRoutingModule from './admin-routing.module';

@NgModule({
  declarations: [AdminComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ButtonComponent,
    ReactiveFormsModule,
  ],
  exports: [AdminComponent],
})
export default class AdminModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { DogsComponent } from './components/dogs/dogs.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [DogsComponent],
  imports: [CommonModule, AdminRoutingModule, SharedModule, FormsModule]
})
export class AdminModule {}

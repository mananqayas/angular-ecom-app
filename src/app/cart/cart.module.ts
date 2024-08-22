import { NgModule } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { CartViewComponent } from './cart-view/cart-view.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [CartViewComponent],
  imports: [CommonModule, MatCardModule, MatListModule, MatButtonModule, NgFor],
})
export class CartModule {}

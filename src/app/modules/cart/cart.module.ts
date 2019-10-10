import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { ItemListModule } from '../../components/item-list/item-list.module';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';

@NgModule({
  imports: [
    CommonModule,
    ItemListModule,
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    RouterModule
  ],
  declarations: [
    CartComponent,
  ],
  exports: [
    CartComponent
  ]
})
export class CartModule { }

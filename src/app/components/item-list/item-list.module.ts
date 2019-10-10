import { ItemListComponent } from './item-list.component';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  imports: [CommonModule, FlexLayoutModule, MatButtonModule, MatCardModule, MatIconModule, RouterModule],
  declarations: [
    ItemListComponent
  ],
  exports: [
    ItemListComponent
  ]
})
export class ItemListModule { }

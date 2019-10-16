import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ItemDetailComponent } from './item-detail.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule, FlexLayoutModule, MatButtonModule, MatIconModule],
  declarations: [
    ItemDetailComponent
  ],
  exports: [
    ItemDetailComponent
  ]
})
export class ItemDetailModule { }

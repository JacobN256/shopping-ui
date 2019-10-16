import { Component, Input } from '@angular/core';
import { Item } from 'src/app/interfaces/item.interface';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent {
  @Input() items: Array<Item>;

  constructor() {
  }
}

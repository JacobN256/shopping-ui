import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/services/item.service';
import { Observable } from 'rxjs';
import { Item } from 'src/app/interfaces/item.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private itemService: ItemService) { }

  get itemList$() {
    return this.itemService.getItems();
  }

}

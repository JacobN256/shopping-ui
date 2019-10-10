import { Injectable } from '@angular/core';
import { Item } from '../interfaces/item.interface';
import { of, Observable } from 'rxjs';

const STARTER_ITEMS: Item[] = [
  {
      id: '1',
      name: 'Dog Food',
      price: 1149,
      original_price: 1400,
      image_url: 'https://i.imgur.com/aVy8uYj.jpg',
  },
  {
      id: '2',
      name: 'Bacon',
      price: 297,
      original_price: 499,
      image_url: 'https://i.imgur.com/sSBjjkG.jpg',
  },
  {
      id: '3',
      name: 'Cheese',
      price: 299,
      original_price: 349,
      image_url: 'https://i.imgur.com/bQwFfCb.jpg',
  },
  {
      id: '4',
      name: 'Shampoo',
      price: 799,
      original_price: 869,
      image_url: 'https://i.imgur.com/QO8aK4H.jpg',
  },
];

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor() { }


  getItems = (): Observable<Array<Item>> => {
    return of(STARTER_ITEMS);
  }

  getById = (itemId): Observable<Item> => {
    return of(STARTER_ITEMS.find((value) => value.id === itemId));
  }
}

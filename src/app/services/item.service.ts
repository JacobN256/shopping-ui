import { Injectable } from '@angular/core';
import { Item } from '../interfaces/item.interface';
import { of, Observable } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private apiService: ApiService) { }


  getItems = (): Observable<Array<Item>> => {
    return this.apiService.get<Array<Item>>('items');
  }

  getById = (itemId): Observable<Item> => {
    return this.apiService.get<Item>(`items/${itemId}`);
  }
}

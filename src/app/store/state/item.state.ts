import { Item } from '../../interfaces/item.interface';

export interface ItemState {
    items: Item[];
    selectedItem: Item;
}

export const initialItemState: ItemState = {
    items: null,
    selectedItem: null,
};

import { Item } from '../../interfaces/item.interface';

export interface ItemState {
    items: Item[];
    selectedItem: Item;
    loaded: boolean;
}

export const initialItemState: ItemState = {
    items: null,
    selectedItem: null,
    loaded: false,
};

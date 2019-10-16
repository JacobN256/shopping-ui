import { Item } from '../../interfaces/item.interface';

export interface ItemState {
    items: Item[];
    selectedItem: Item;
    loading: boolean;
}

export const initialItemState: ItemState = {
    items: null,
    selectedItem: null,
    loading: false,
};

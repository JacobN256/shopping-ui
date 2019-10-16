import { IAppState } from '../state/app.state';
import { ItemState } from '../state/item.state';
import { createSelector } from '@ngrx/store';

const selectItems = (state: IAppState) => state.items;


export const selectItemList = createSelector(
    selectItems,
    (state: ItemState) => state.items
);

export const selectSelectedItem = createSelector(
    selectItems,
    (state: ItemState) => state.selectedItem
);

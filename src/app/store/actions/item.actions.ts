import { Action } from '@ngrx/store';
import { Item } from 'src/app/interfaces/item.interface';


export enum EItemActions {
    GetItems = '[Item] Get Items',
    GetItemsSuccess = '[Item] Get Items Success',
    GetItem = '[Item] Get Item',
    GetItemSuccess = '[Item] Get Item Success',
}

export class GetItems implements Action {
    public readonly type = EItemActions.GetItems;
}

export class GetItemsSuccess implements Action {
    public readonly type = EItemActions.GetItemsSuccess;
    constructor(public payload: Item[]) {}
}

export class GetItem implements Action {
    public readonly type = EItemActions.GetItem;
    constructor(public payload: string) {}
}

export class GetItemSuccess implements Action {
    public readonly type = EItemActions.GetItemSuccess;
    constructor(public payload: Item) {}
}


export type ItemActions = GetItems | GetItemsSuccess | GetItem | GetItemSuccess;

import { ItemState, initialItemState } from './item.state';
import { RouterReducerState } from '@ngrx/router-store';

export interface IAppState {
    router?: RouterReducerState;
    items: ItemState;
}


export const initialAppState: IAppState = {
    items: initialItemState,
};


export function getInitialState(): IAppState {
    return initialAppState;
}

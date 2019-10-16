import { ActionReducerMap } from '@ngrx/store';
import { IAppState } from '../state/app.state';
import { routerReducer } from '@ngrx/router-store';
import { itemReducers } from './item.reducers';

export const appReducers: ActionReducerMap<IAppState, any> = {
    router: routerReducer,
    items: itemReducers,
};

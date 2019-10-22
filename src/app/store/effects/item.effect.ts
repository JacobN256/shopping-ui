import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { EItemActions, GetItemSuccess, GetItems, GetItemsSuccess } from '../actions/item.actions';
import { switchMap, map, withLatestFrom, filter } from 'rxjs/operators';
import { ItemService } from 'src/app/services/item.service';
import { IAppState } from '../state/app.state';
import { GetItem } from '../actions/item.actions';
import { Store, select } from '@ngrx/store';
import { selectLoaded, selectSelectedItem } from '../selectors/item.selector';
import { of } from 'rxjs';
import { Item } from 'src/app/interfaces/item.interface';

@Injectable()
export class ItemEffects {
    @Effect()
    getItem$ = this.actions$.pipe(
        ofType<GetItem>(EItemActions.GetItem),
        map(action => {
            return action.payload;
        }),
        withLatestFrom(this.store.pipe(select(selectSelectedItem))),
        filter(([id, item]) => {
            return !(item && item.id === id);
        }), // continue if ID does not match selectedItem
        switchMap(([id, item]) => this.itemService.getById(id)),
        switchMap((response: Item) => of(new GetItemSuccess(response)))
    );

    @Effect()
    getItems$ = this.actions$.pipe(
        ofType<GetItems>(EItemActions.GetItems),
        withLatestFrom(this.store.pipe(select(selectLoaded))),
        filter(([action, loaded]) => {
            return !loaded;
        }),
        switchMap(() => this.itemService.getItems()),
        switchMap((response: Item[]) => of(new GetItemsSuccess(response)))
    );


    constructor(
        private itemService: ItemService,
        private actions$: Actions,
        private store: Store<IAppState>
    ) { }


}

import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { EItemActions, GetItemSuccess, GetItems, GetItemsSuccess } from '../actions/item.actions';
import { switchMap, map, withLatestFrom } from 'rxjs/operators';
import { ItemService } from 'src/app/services/item.service';
import { IAppState } from '../state/app.state';
import { GetItem } from '../actions/item.actions';
import { Store, select } from '@ngrx/store';
import { selectItemList } from '../selectors/item.selector';
import { of } from 'rxjs';
import { Item } from 'src/app/interfaces/item.interface';

@Injectable()
export class ItemEffects {
    @Effect()
    getItem$ = this.actions$.pipe(
        ofType<GetItem>(EItemActions.GetItem),
        map(action => action.payload),
        withLatestFrom(this.store.pipe(select(selectItemList))),
        switchMap(([id, items]) => {
            if (items && items.length > 0) {
                return items.filter((value) => value.id === id);
            }
            return this.itemService.getById(id);
        }),
        switchMap((response: any) => {
            return of(new GetItemSuccess(response));
        }
        ));

    @Effect()
    getItems$ = this.actions$.pipe(
        ofType<GetItems>(EItemActions.GetItems),
        withLatestFrom(this.store.pipe(select(selectItemList))),
        switchMap(([action, items]) => {
            if (items && items.length > 0) {
                return of(items);
            }
            return this.itemService.getItems();
        }),
        switchMap((response: any) => of(new GetItemsSuccess(response)))
    );


    constructor(
        private itemService: ItemService,
        private actions$: Actions,
        private store: Store<IAppState>
    ) { }


}

import { initialItemState, ItemState } from '../state/item.state';
import { ItemActions, EItemActions } from '../actions/item.actions';


export const itemReducers = (
    state = initialItemState,
    action: ItemActions
): ItemState => {
    switch (action.type) {
        case EItemActions.GetItemsSuccess: {
            return {
                ...state,
                items: action.payload,
                loading: false
            };
        }
        case EItemActions.GetItemSuccess: {
            return {
                ...state,
                selectedItem: action.payload
            };
        }
        case EItemActions.GetItems: {
            console.log('hit it');
            return {
                ...state,
                loading: true
            };
        }

        default:
            return state;
    }

};

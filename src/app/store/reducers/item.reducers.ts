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
                items: action.payload
            };
        }
        case EItemActions.GetItemSuccess: {
            return {
                ...state,
                selectedItem: action.payload
            };
        }

        default:
            return state;
    }

};

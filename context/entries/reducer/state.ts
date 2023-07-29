import { EntriesAction } from './actions';
import { EntriesState } from './entries';

export const entriesReducer = (
    state: EntriesState,
    action: EntriesAction
): EntriesState => {
    switch (action.type) {
        case 'Entry - Add Entry':
            return {
                ...state,
                entries: [...state.entries, action.payload]
            };
        default:
            return state;
    }
};

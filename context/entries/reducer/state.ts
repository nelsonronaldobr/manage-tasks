import { EntriesAction } from './actions';
import { EntriesState } from './entries';

export const entriesReducer = (
    state: EntriesState,
    { type, payload }: EntriesAction
): EntriesState => {
    switch (type) {
        case 'Entry - Add Entry':
            return {
                ...state,
                entries: [...state.entries, payload]
            };
        case 'Entry - Update Entry':
            return {
                ...state,
                entries: state.entries.map((entry) => {
                    if (entry._id === payload._id) {
                        entry.status = payload.status;
                        entry.description = payload.description;
                    }
                    return entry;
                })
            };
        case 'Entry - Delete Entry':
            return {
                ...state,
                entries: state.entries.filter(
                    (entry) => entry._id !== payload._id
                )
            };
        case 'Entry - Refresh Data':
            return {
                ...state,
                entries: [...payload]
            };
        default:
            return state;
    }
};

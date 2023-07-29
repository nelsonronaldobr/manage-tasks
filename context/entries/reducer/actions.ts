import { Entry } from './entries';

export type EntriesAction = { type: 'Entry - Add Entry'; payload: Entry };

export const doAddEntry = (entry: Entry): EntriesAction => {
    return {
        type: 'Entry - Add Entry',
        payload: entry
    };
};

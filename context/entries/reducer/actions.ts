import { Entry } from './entries';

export type EntriesAction =
    | { type: 'Entry - Add Entry'; payload: Entry }
    | { type: 'Entry - Update Entry'; payload: Entry }
    | { type: 'Entry - Refresh Data'; payload: Entry[] }
    | { type: 'Entry - Delete Entry'; payload: Entry };

export const doAddEntry = (entry: Entry): EntriesAction => {
    return {
        type: 'Entry - Add Entry',
        payload: entry
    };
};

export const doUpdateEntry = (entry: Entry): EntriesAction => {
    return {
        type: 'Entry - Update Entry',
        payload: entry
    };
};

export const doDeleteEntry = (entry: Entry): EntriesAction => {
    return {
        type: 'Entry - Delete Entry',
        payload: entry
    };
};
export const doRefreshData = (entries: Entry[]): EntriesAction => {
    return {
        type: 'Entry - Refresh Data',
        payload: entries
    };
};

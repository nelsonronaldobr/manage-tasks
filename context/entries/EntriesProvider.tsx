import { FC, ReactNode, useEffect, useReducer } from 'react';
import { EntriesContext } from './';
import {
    EntriesState,
    Entry,
    doAddEntry,
    doRefreshData,
    doUpdateEntry,
    entriesReducer
} from './reducer';
import { v4 as uuid } from 'uuid';
import { entriesApi } from '../../api';

interface Props {
    children: ReactNode | JSX.Element[] | JSX.Element;
}
const ENTRIES_INITAL_STATE: EntriesState = {
    entries: []
};

export const EntriesProvider: FC<Props> = ({ children }) => {
    const [state, dispatch] = useReducer(entriesReducer, ENTRIES_INITAL_STATE);

    const addEntry = (description: string) => {
        const entry: Entry = {
            _id: uuid(),
            description,
            status: 'pending',
            createdAd: Date.now()
        };
        dispatch(doAddEntry(entry));
    };

    const updateEntry = (entry: Entry) => {
        dispatch(doUpdateEntry(entry));
    };

    const refreshEntries = async () => {
        const { data } = await entriesApi<Entry[]>('/entries');
        dispatch(doRefreshData(data));
    };

    useEffect(() => {
        refreshEntries();
    }, []);

    return (
        <EntriesContext.Provider
            value={{
                ...state,
                addEntry,
                updateEntry
            }}>
            {children}
        </EntriesContext.Provider>
    );
};

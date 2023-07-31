import { FC, ReactNode, useReducer } from 'react';
import { EntriesContext } from './';
import {
    EntriesState,
    Entry,
    doAddEntry,
    doUpdateEntry,
    entriesReducer
} from './reducer';
import { v4 as uuid } from 'uuid';

interface Props {
    children: ReactNode | JSX.Element[] | JSX.Element;
}
const ENTRIES_INITAL_STATE: EntriesState = {
    entries: [
        {
            _id: uuid(),
            description: 'Pendiente : Lorem Lorem Lorem Lorem Lorem',
            status: 'pending',
            createdAd: Date.now()
        },
        {
            _id: uuid(),
            description: 'En Progreso : Lorem Lorem Lorem Lorem Lorem',
            status: 'in-progress',
            createdAd: Date.now() - 1000000
        },
        {
            _id: uuid(),
            description: 'Finalizado : Lorem Lorem Lorem Lorem Lorem',
            status: 'finished',
            createdAd: Date.now() - 100000
        }
    ]
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

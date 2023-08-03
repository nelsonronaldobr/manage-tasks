import { createContext } from 'react';
import { Entry } from './reducer';

export interface ContextProps {
    entries: Entry[];
    addEntry: (description: string) => void;
    updateEntry: (entry: Entry) => void;
    deleteEntry: (entry: Entry) => Promise<void>;
}

export const EntriesContext = createContext({} as ContextProps);

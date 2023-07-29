import { createContext } from 'react';
import { Entry } from './reducer';

export interface ContextProps {
    entries: Entry[];
    addEntry: (description: string) => void;
}

export const EntriesContext = createContext({} as ContextProps);

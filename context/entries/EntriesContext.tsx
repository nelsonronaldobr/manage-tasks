import { createContext } from 'react';
import { Entry } from './reducer';

export interface ContextProps {
    entries: Entry[];
}

export const EntriesContext = createContext({} as ContextProps);

import { createContext } from 'react';

export interface ContextProps {
    sideMenuOpen: boolean;
    toggleSidebar: () => void;
    isAdding: boolean;
    toggleAddingEntry: () => void;
}

export const UIContext = createContext({} as ContextProps);

import { createContext } from 'react';

export interface ContextProps {
    sideMenuOpen: boolean;
    toggleSidebar: () => void;
}

export const UIContext = createContext({} as ContextProps);

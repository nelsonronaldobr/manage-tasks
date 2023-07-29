import { createContext } from 'react';
import { Alert } from './reducer';

export interface ContextProps {
    sideMenuOpen: boolean;
    toggleSidebar: () => void;
    isAdding: boolean;
    toggleAddingEntry: () => void;
    alert: Alert;
    showALert: (alert: Alert) => void;
    closeAlert: () => void;
    isDragging: boolean;
    endDragging: () => void;
    startDragging: () => void;
}

export const UIContext = createContext({} as ContextProps);

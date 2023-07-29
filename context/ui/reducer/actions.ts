import { Alert } from './ui';

export type UIAction =
    | { type: 'UI - Toggle Sidebar' }
    | { type: 'UI - Toggle Adding Entry' }
    | { type: 'UI - Show Alert'; payload: Alert }
    | { type: 'UI - Close Alert' };

export const doToggleSidebar = (): UIAction => {
    return {
        type: 'UI - Toggle Sidebar'
    };
};

export const doToggleAddingEntry = (): UIAction => {
    return {
        type: 'UI - Toggle Adding Entry'
    };
};

export const doShowAlert = ({ text, type }: Alert): UIAction => {
    return {
        type: 'UI - Show Alert',
        payload: { text, type }
    };
};

export const doCloseAlert = (): UIAction => {
    return {
        type: 'UI - Close Alert'
    };
};

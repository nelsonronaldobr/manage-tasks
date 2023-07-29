export type UIAction =
    | { type: 'UI - Toggle Sidebar' }
    | { type: 'UI - Toggle Adding Entry' };

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

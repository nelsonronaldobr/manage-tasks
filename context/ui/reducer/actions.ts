export type UIAction = { type: 'UI - Toggle Sidebar' };

export const doToggleSidebar = (): UIAction => {
    return {
        type: 'UI - Toggle Sidebar'
    };
};

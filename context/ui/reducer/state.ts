import { UIAction } from './actions';
import { UIstate } from './ui';

export const uiReducer = (state: UIstate, action: UIAction): UIstate => {
    switch (action.type) {
        case 'UI - Toggle Sidebar':
            return {
                ...state,
                sideMenuOpen: !state.sideMenuOpen
            };
        default:
            return state;
    }
};
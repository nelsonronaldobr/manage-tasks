import { UIAction } from './actions';
import { Alert, UIstate } from './ui';

export const uiReducer = (state: UIstate, action: UIAction): UIstate => {
    switch (action.type) {
        case 'UI - Toggle Sidebar':
            return {
                ...state,
                sideMenuOpen: !state.sideMenuOpen
            };
        case 'UI - Toggle Adding Entry':
            return {
                ...state,
                isAdding: !state.isAdding
            };
        case 'UI - Show Alert':
            return {
                ...state,
                alert: {
                    open: true,
                    text: action.payload.text,
                    type: action.payload.type
                }
            };
        case 'UI - Close Alert':
            return {
                ...state,
                alert: {
                    ...state.alert,
                    open: false
                }
            };
        default:
            return state;
    }
};

import { FC, ReactNode, useReducer } from 'react';
import { UIContext } from './';
import {
    UIstate,
    doToggleAddingEntry,
    doToggleSidebar,
    uiReducer
} from './reducer';

interface Props {
    children: ReactNode | JSX.Element[] | JSX.Element;
}
const UI_INITAL_STATE: UIstate = {
    sideMenuOpen: false,
    isAdding: false
};

export const UIProvider: FC<Props> = ({ children }) => {
    const [state, dispatch] = useReducer(uiReducer, UI_INITAL_STATE);

    const toggleSidebar = () => {
        dispatch(doToggleSidebar());
    };

    const toggleAddingEntry = () => {
        console.log(state.isAdding);

        dispatch(doToggleAddingEntry());
    };

    return (
        <UIContext.Provider
            value={{
                ...state,
                toggleSidebar,
                toggleAddingEntry
            }}>
            {children}
        </UIContext.Provider>
    );
};

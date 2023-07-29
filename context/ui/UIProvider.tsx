import { FC, ReactNode, useReducer } from 'react';
import { UIContext } from './';
import { UIstate, doToggleSidebar, uiReducer } from './reducer';

interface Props {
    children: ReactNode | JSX.Element[] | JSX.Element;
}
const UI_INITAL_STATE: UIstate = {
    sideMenuOpen: false
};

export const UIProvider: FC<Props> = ({ children }) => {
    const [state, dispatch] = useReducer(uiReducer, UI_INITAL_STATE);

    const toggleSidebar = () => {
        dispatch(doToggleSidebar());
    };

    return (
        <UIContext.Provider
            value={{
                ...state,
                toggleSidebar
            }}>
            {children}
        </UIContext.Provider>
    );
};

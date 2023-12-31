import { FC, ReactNode, useReducer } from 'react';
import { UIContext } from './';
import {
    Alert,
    UIstate,
    doCloseAlert,
    doEndDragging,
    doShowAlert,
    doStartDragging,
    doToggleAddingEntry,
    doToggleSidebar,
    uiReducer
} from './reducer';

interface Props {
    children: ReactNode | JSX.Element[] | JSX.Element;
}
const UI_INITAL_STATE: UIstate = {
    sideMenuOpen: false,
    isAdding: false,
    alert: { open: false } as Alert,
    isDragging: false
};

export const UIProvider: FC<Props> = ({ children }) => {
    const [state, dispatch] = useReducer(uiReducer, UI_INITAL_STATE);

    const toggleSidebar = () => {
        dispatch(doToggleSidebar());
    };

    const toggleAddingEntry = () => {
        dispatch(doToggleAddingEntry());
    };

    const showALert = ({ text, type }: Alert) => {
        dispatch(doShowAlert({ text, type }));
    };

    const closeAlert = () => {
        dispatch(doCloseAlert());
    };

    const endDragging = () => {
        dispatch(doEndDragging());
    };
    const startDragging = () => {
        dispatch(doStartDragging());
    };

    return (
        <UIContext.Provider
            value={{
                ...state,
                toggleSidebar,
                toggleAddingEntry,
                closeAlert,
                showALert,
                startDragging,
                endDragging
            }}>
            {children}
        </UIContext.Provider>
    );
};

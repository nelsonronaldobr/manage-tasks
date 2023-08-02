import { FC, ReactNode, useEffect, useReducer } from 'react';
import { EntriesContext } from './';
import {
    EntriesState,
    Entry,
    doAddEntry,
    doRefreshData,
    doUpdateEntry,
    entriesReducer
} from './reducer';
import { entriesApi } from '../../api';
import { useUI } from '../../hooks';

interface Props {
    children: ReactNode | JSX.Element[] | JSX.Element;
}
const ENTRIES_INITAL_STATE: EntriesState = {
    entries: []
};

export const EntriesProvider: FC<Props> = ({ children }) => {
    const [state, dispatch] = useReducer(entriesReducer, ENTRIES_INITAL_STATE);

    const { showALert } = useUI();

    const addEntry = async (description: string) => {
        try {
            const { data } = await entriesApi.post<Entry>('/entries', {
                description
            });
            dispatch(doAddEntry(data));
            showALert({
                text: `Tarea ${data._id} creada con Éxito`,
                type: 'success'
            });
        } catch (error) {
            console.log(error);

            showALert({
                text: 'ERROR : Comunicate con el administrador',
                type: 'error'
            });
        }
    };

    const updateEntry = async ({ description, _id, status }: Entry) => {
        try {
            const { data } = await entriesApi.put<Entry>(`/entries/${_id}`, {
                description,
                status
            });
            dispatch(doUpdateEntry(data));
            showALert({
                text: `Tarea ${_id} actualizada con Éxito`,
                type: 'success'
            });
        } catch (error: any) {
            console.log(error.response.data.message);

            showALert({
                text: `ERROR : ${error.response.data.message}`,
                type: 'error'
            });
        }
    };

    const refreshEntries = async () => {
        const { data } = await entriesApi<Entry[]>('/entries');
        dispatch(doRefreshData(data));
    };

    useEffect(() => {
        refreshEntries();
    }, []);

    return (
        <EntriesContext.Provider
            value={{
                ...state,
                addEntry,
                updateEntry
            }}>
            {children}
        </EntriesContext.Provider>
    );
};

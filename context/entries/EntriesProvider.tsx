import { FC, ReactNode, useEffect, useReducer } from 'react';
import { EntriesContext } from './';
import {
    EntriesState,
    Entry,
    doAddEntry,
    doDeleteEntry,
    doRefreshData,
    doUpdateEntry,
    entriesReducer
} from './reducer';
import { entriesApi } from '../../api';
import { useSnackbar } from 'notistack';

interface Props {
    children: ReactNode | JSX.Element[] | JSX.Element;
}
const ENTRIES_INITAL_STATE: EntriesState = {
    entries: []
};

export const EntriesProvider: FC<Props> = ({ children }) => {
    const [state, dispatch] = useReducer(entriesReducer, ENTRIES_INITAL_STATE);
    /* const { showALert } = useUI(); */
    const { enqueueSnackbar } = useSnackbar();

    const addEntry = async (description: string) => {
        try {
            const { data } = await entriesApi.post<Entry>('/entries', {
                description
            });
            dispatch(doAddEntry(data));
            /* showALert({
                text: `Tarea ${data._id} creada con Éxito`,
                type: 'success'
            }); */
            enqueueSnackbar(`Tarea ${data._id} creada con Éxito`, {
                variant: 'success',
                anchorOrigin: {
                    vertical: 'bottom',
                    horizontal: 'right'
                },
                autoHideDuration: 1500
            });
        } catch (error) {
            /* showALert({
                text: 'ERROR : Comunicate con el administrador',
                type: 'error'
            }); */
            enqueueSnackbar('ERROR : Comunicate con el administrador', {
                variant: 'error',
                anchorOrigin: {
                    vertical: 'bottom',
                    horizontal: 'right'
                },
                autoHideDuration: 1500
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
            /* showALert({
                text: `Tarea ${_id} actualizada con Éxito`,
                type: 'success'
            }); */
            enqueueSnackbar(`Tarea ${data._id} actualizada con Éxito`, {
                variant: 'success',
                anchorOrigin: {
                    vertical: 'bottom',
                    horizontal: 'right'
                },
                autoHideDuration: 1500
            });
        } catch (error: any) {
            /* showALert({
                text: `ERROR : ${error.response.data.message}`,
                type: 'error'
            }); */
            enqueueSnackbar(`ERROR : ${error.response.data.message}`, {
                variant: 'error',
                anchorOrigin: {
                    vertical: 'bottom',
                    horizontal: 'right'
                },
                autoHideDuration: 1500
            });
        }
    };

    const deleteEntry = async ({ _id }: Entry) => {
        try {
            const { data } = await entriesApi.delete<Entry>(`/entries/${_id}`);
            dispatch(doDeleteEntry(data));
            /* showALert({
                text: `Tarea ${_id} actualizada con Éxito`,
                type: 'success'
            }); */
            enqueueSnackbar(`Tarea ${data._id} eliminada con Éxito`, {
                variant: 'success',
                anchorOrigin: {
                    vertical: 'bottom',
                    horizontal: 'right'
                },
                autoHideDuration: 1500
            });
        } catch (error: any) {
            /* showALert({
                text: `ERROR : ${error.response.data.message}`,
                type: 'error'
            }); */
            enqueueSnackbar(`ERROR : ${error.response.data.message}`, {
                variant: 'error',
                anchorOrigin: {
                    vertical: 'bottom',
                    horizontal: 'right'
                },
                autoHideDuration: 1500
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
                updateEntry,
                deleteEntry
            }}>
            {children}
        </EntriesContext.Provider>
    );
};

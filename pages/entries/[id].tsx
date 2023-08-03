import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    FormControl,
    FormControlLabel,
    FormLabel,
    Grid,
    IconButton,
    Paper,
    Radio,
    RadioGroup,
    TextField,
    Typography,
    capitalize
} from '@mui/material';
import { Layout } from '../../components/layouts';
import { grey } from '@mui/material/colors';
import { Entry, EntryStatus } from '../../context/entries';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { ChangeEvent, FC, MouseEvent, useMemo, useState } from 'react';
import { useRouter } from 'next/router';
import { GetServerSideProps } from 'next';
import { isValidObjectId } from 'mongoose';
import { entriesApi } from '../../api';
import { useEntries } from '../../hooks';
import { SnackbarKey, useSnackbar } from 'notistack';
import { dateFunctions } from '../../helpers';

const validStatus: EntryStatus[] = ['pending', 'in-progress', 'finished'];

interface Props {
    entry: Entry;
}

const EntryPage: FC<Props> = ({ entry }) => {
    const [inputValue, setInputValue] = useState(entry.description);
    const [status, setStatus] = useState<EntryStatus>(entry.status);
    const [touched, setTouched] = useState(false);
    const { updateEntry, deleteEntry } = useEntries();

    const router = useRouter();

    const { enqueueSnackbar, closeSnackbar } = useSnackbar();

    const isNotValid = useMemo(
        () => inputValue.length <= 0 && touched,
        [inputValue, touched]
    );

    const onTextFieldChanged = ({ target }: ChangeEvent<HTMLInputElement>) => {
        setInputValue(target.value);
    };

    const onTouchChanged = () => {
        setTouched(true);
    };

    const onCancel = () => {
        setTouched(false);
        router.replace('/');
    };

    const onStatusChanged = ({ target }: ChangeEvent<HTMLInputElement>) => {
        setStatus(target.value as EntryStatus);
    };

    const onSave = () => {
        if (inputValue.length <= 0) {
            onTouchChanged();
            return;
        }
        const updatedEntry: Entry = {
            ...entry,
            status,
            description: inputValue
        };
        updateEntry(updatedEntry);
        setInputValue('');
        router.replace('/');
    };

    const showAlert = (event: MouseEvent<HTMLButtonElement>) => {
        enqueueSnackbar('¿Desea eliminar esta tarea?', {
            action,
            autoHideDuration: 2500
        });
    };

    const onDelete = (event: MouseEvent<HTMLButtonElement>) => {
        deleteEntry(entry);
        closeSnackbar();
        router.replace('/');
    };

    const action = (snackbarId: SnackbarKey) => (
        <Grid>
            <Button color='secondary' variant='text' onClick={onDelete}>
                Delete
            </Button>
            <Button
                variant='text'
                color='error'
                onClick={() => closeSnackbar()}>
                Cancelar
            </Button>
        </Grid>
    );

    return (
        <Layout title={inputValue.substring(0, 20) + '...'}>
            <Grid
                container
                justifyContent={'center'}
                sx={{
                    marginTop: 2
                }}>
                <Grid item xs={12} sm={8} md={6}>
                    <Card
                        sx={{
                            padding: 1
                        }}>
                        <CardHeader title={`Entrada:`} />
                        <CardContent>
                            <Box
                                display={'flex'}
                                justifyContent={'space-between'}
                                flexWrap={'wrap'}>
                                <Typography>
                                    Creado hace{' '}
                                    {dateFunctions.getFormatDistanceToNow(
                                        entry.createdAt
                                    )}{' '}
                                </Typography>
                                <Typography>
                                    Actualizado hace{' '}
                                    {dateFunctions.getFormatDistanceToNow(
                                        entry.updatedAt
                                    )}{' '}
                                </Typography>
                            </Box>
                            <TextField
                                onChange={onTextFieldChanged}
                                value={inputValue}
                                helperText={isNotValid && 'Ingresa un valor'}
                                fullWidth
                                error={isNotValid}
                                sx={{
                                    marginTop: 2,
                                    marginBottom: 1
                                }}
                                placeholder='Nueva entrada'
                                autoFocus
                                multiline
                                label={'Nueva entrada'}
                            />
                            <FormControl>
                                <FormLabel>Status</FormLabel>
                                <RadioGroup
                                    row
                                    value={status}
                                    onChange={onStatusChanged}>
                                    {validStatus.map((option) => (
                                        <FormControlLabel
                                            key={option}
                                            value={option}
                                            control={<Radio />}
                                            label={capitalize(option)}
                                        />
                                    ))}
                                </RadioGroup>
                            </FormControl>
                        </CardContent>
                        <CardActions
                            sx={{
                                display: 'flex',
                                justifyContent: 'flex-end'
                            }}>
                            <Button
                                variant='outlined'
                                color='primary'
                                disabled={inputValue.length <= 0}
                                onClick={onSave}>
                                Guardar
                            </Button>
                            <Button
                                variant='text'
                                color='error'
                                onClick={onCancel}>
                                Cancelar
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
            <IconButton
                onClick={showAlert}
                sx={{
                    position: 'fixed',
                    bottom: 30,
                    right: 30,
                    padding: 1.5,
                    backgroundColor: 'error.dark'
                }}>
                <DeleteOutlineIcon />
            </IconButton>
        </Layout>
    );
};

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time
export const getServerSideProps: GetServerSideProps = async ({ params }) => {
    const { id } = params as { id: string };

    const { data: entry } = await entriesApi<Entry>(`/entries/${id}`);

    if (!entry) {
        return {
            redirect: {
                destination: '/',
                permanent: false
            }
        };
    }

    return {
        props: {
            entry
        }
    };
};

export default EntryPage;

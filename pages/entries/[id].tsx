import {
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
    Radio,
    RadioGroup,
    TextField,
    capitalize
} from '@mui/material';
import { Layout } from '../../components/layouts';
import { grey } from '@mui/material/colors';
import { EntryStatus } from '../../context/entries';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { ChangeEvent, useMemo, useState } from 'react';
import { useRouter } from 'next/router';

const validStatus: EntryStatus[] = ['pending', 'in-progress', 'finished'];

const EntryPage = () => {
    const [inputValue, setInputValue] = useState('');
    const [status, setStatus] = useState<EntryStatus>('pending');
    const [touched, setTouched] = useState(false);

    const router = useRouter();

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
        router.push('/');
    };

    const onStatusChanged = ({ target }: ChangeEvent<HTMLInputElement>) => {
        setStatus(target.value as EntryStatus);
    };

    const onSave = () => {
        if (inputValue.length <= 0) {
            onTouchChanged();
            return;
        }
        setInputValue('');
    };

    return (
        <Layout title='. .. .'>
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
                        <CardHeader
                            title={`Entrada: ${inputValue}`}
                            subheader={`Creada hace: ... minutos`}
                        />
                        <CardContent>
                            <TextField
                                onChange={onTextFieldChanged}
                                value={inputValue}
                                helperText={isNotValid && 'Ingresa un valor'}
                                fullWidth
                                onBlur={onTouchChanged}
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

export default EntryPage;

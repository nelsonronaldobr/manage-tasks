import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import DialogMUI from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useEntries, useUI } from '../../hooks';
import { ChangeEvent, useState } from 'react';
import {
    DialogContentText,
    Divider,
    useMediaQuery,
    useTheme
} from '@mui/material';

export const Dialog = () => {
    const { isAdding, toggleAddingEntry } = useUI();
    const { addEntry } = useEntries();
    const [inputValue, setInputValue] = useState('');
    const [touched, setTouched] = useState(false);

    const onTextFieldChanged = ({ target }: ChangeEvent<HTMLInputElement>) => {
        setInputValue(target.value);
    };

    const onTouchChanged = () => {
        setTouched(true);
    };

    const onCancel = () => {
        setTouched(false);
        setInputValue('');
        toggleAddingEntry();
    };

    const onSave = () => {
        if (inputValue.length <= 0) {
            onTouchChanged();
            return;
        }
        addEntry(inputValue);
        setInputValue('');
        toggleAddingEntry();
    };
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <div>
            <DialogMUI
                open={isAdding}
                onClose={toggleAddingEntry}
                fullScreen={fullScreen}>
                <DialogTitle>ManageTasks</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Agrega, maneja y enlista tus tareas en ManageTasks
                    </DialogContentText>
                    <TextField
                        onChange={onTextFieldChanged}
                        value={inputValue}
                        fullWidth
                        sx={{
                            marginTop: 2,
                            marginBottom: 1
                        }}
                        placeholder='Nueva entrada'
                        autoFocus
                        multiline
                        error={inputValue.length <= 0 && touched}
                        label={'Nueva entrada'}
                        helperText={
                            inputValue.length <= 0 &&
                            touched &&
                            'Ingresa un valor'
                        }
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={onSave} variant='outlined' color='primary'>
                        Guardar
                    </Button>
                    <Button variant='text' color='error' onClick={onCancel}>
                        Cancelar
                    </Button>
                </DialogActions>
            </DialogMUI>
        </div>
    );
};

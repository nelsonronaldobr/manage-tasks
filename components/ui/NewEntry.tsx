import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import { Box, Button, TextField } from '@mui/material';
import { useUI } from '../../hooks';
import { ChangeEvent, Fragment, useState } from 'react';

export const NewEntry = () => {
    const { isAdding, toggleAddingEntry } = useUI();
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
        toggleAddingEntry();
    };

    const onSave = () => {
        if (inputValue.length <= 0) return;
        console.log(inputValue);
    };

    return (
        <Box
            sx={{
                marginBotton: 2,
                paddingX: '18px'
            }}>
            {isAdding ? (
                <div className='animate__animated animate__fadeIn'>
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
                        onBlur={onTouchChanged}
                        multiline
                        error={inputValue.length <= 0 && touched}
                        label={'Nueva entrada'}
                        helperText={
                            inputValue.length <= 0 &&
                            touched &&
                            'Ingresa un valor'
                        }
                    />
                    <Box display={'flex'} justifyContent={'space-between'}>
                        <Button
                            onClick={onSave}
                            variant='outlined'
                            color='primary'
                            endIcon={<SaveOutlinedIcon />}>
                            Guardar
                        </Button>
                        <Button variant='text' color='error' onClick={onCancel}>
                            Cancelar
                        </Button>
                    </Box>
                </div>
            ) : (
                <Button
                    onClick={toggleAddingEntry}
                    fullWidth
                    variant='outlined'
                    startIcon={<AddCircleOutlineOutlinedIcon />}>
                    Agregar Tarea
                </Button>
            )}
        </Box>
    );
};

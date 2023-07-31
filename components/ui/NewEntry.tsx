import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import { Box, Button } from '@mui/material';
import { useUI } from '../../hooks';
import { Alert } from './Alert';

export const NewEntry = () => {
    const { toggleAddingEntry } = useUI();
    return (
        <Box>
            <Button onClick={toggleAddingEntry} fullWidth variant='outlined'>
                Agregar Tarea
            </Button>
        </Box>
    );
};

import { Alert as AlertMUI, Snackbar } from '@mui/material';
import { FC } from 'react';
import { useUI } from '../../hooks';

export const Alert: FC = () => {
    const {
        closeAlert,
        alert: { open, text, type }
    } = useUI();

    return (
        <Snackbar
            open={open}
            autoHideDuration={6000}
            onClose={closeAlert}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}>
            <AlertMUI
                onClose={closeAlert}
                severity={type}
                sx={{ width: '100%' }}>
                {text}
            </AlertMUI>
        </Snackbar>
    );
};

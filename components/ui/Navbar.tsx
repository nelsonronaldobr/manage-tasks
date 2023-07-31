import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Container } from '@mui/material';
import { useUI } from '../../hooks';
import { NewEntry } from './NewEntry';

export const Navbar = () => {
    const { toggleSidebar } = useUI();

    return (
        <AppBar position='static'>
            <Container sx={{ flexGrow: 1 }} maxWidth={'xl'}>
                <Toolbar
                    sx={{
                        gap: 1
                    }}>
                    <IconButton
                        size='large'
                        edge='start'
                        color='inherit'
                        aria-label='menu'
                        onClick={toggleSidebar}>
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant='h6'
                        component='div'
                        sx={{ flexGrow: 1 }}>
                        ManageTasks
                    </Typography>
                    <NewEntry />
                </Toolbar>
            </Container>
        </AppBar>
    );
};

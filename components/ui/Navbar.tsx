import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Container } from '@mui/material';
import { useUI } from '../../hooks';

export const Navbar = () => {
    const { toggleSidebar } = useUI();

    return (
        <AppBar position='static'>
            <Container sx={{ flexGrow: 1 }} maxWidth={'xl'}>
                <Toolbar>
                    <IconButton
                        size='large'
                        edge='start'
                        color='inherit'
                        aria-label='menu'
                        onClick={toggleSidebar}
                        sx={{
                            mr: 2
                        }}>
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant='h6'
                        component='div'
                        sx={{ flexGrow: 1 }}>
                        ManageTasks
                    </Typography>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Container, Link } from '@mui/material';
import { useUI } from '../../hooks';
import { NewEntry } from './NewEntry';
import NextLink from 'next/link';

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
                    <Link
                        sx={{
                            flex: 1
                        }}
                        href='/'
                        underline='none'
                        passHref
                        color={'white'}
                        component={NextLink}>
                        <Typography
                            variant='h6'
                            component='div'
                            sx={{ flexGrow: 1 }}>
                            ManageTasks
                        </Typography>
                    </Link>
                    <NewEntry />
                </Toolbar>
            </Container>
        </AppBar>
    );
};

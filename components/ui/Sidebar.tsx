import { InboxOutlined, MailOutlineOutlined } from '@mui/icons-material';
import {
    Box,
    Container,
    Divider,
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Typography
} from '@mui/material';
import { useUI } from '../../hooks';

const menuItems: string[] = ['Inbox', 'Starred', 'Send Email', 'Draf'];

export const Sidebar = () => {
    const { sideMenuOpen, toggleSidebar } = useUI();

    return (
        <Container maxWidth='xl'>
            <Drawer anchor='left' open={sideMenuOpen} onClose={toggleSidebar}>
                <Box
                    sx={{
                        width: 250
                    }}>
                    <Box sx={{ padding: '5px 10px' }}>
                        <Typography variant='h4'>Menú</Typography>
                    </Box>
                    <List>
                        {menuItems.map((item, index) => (
                            <ListItem button key={index}>
                                <ListItemIcon>
                                    {index % 2 ? (
                                        <InboxOutlined />
                                    ) : (
                                        <MailOutlineOutlined />
                                    )}
                                </ListItemIcon>
                                <ListItemText primary={item} />
                            </ListItem>
                        ))}
                    </List>
                    <Divider />
                    <List>
                        {menuItems.map((item, index) => (
                            <ListItem button key={index}>
                                <ListItemIcon>
                                    {index % 2 ? (
                                        <InboxOutlined />
                                    ) : (
                                        <MailOutlineOutlined />
                                    )}
                                </ListItemIcon>
                                <ListItemText primary={item} />
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Drawer>
        </Container>
    );
};

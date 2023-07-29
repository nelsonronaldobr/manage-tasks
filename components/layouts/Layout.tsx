import { Box, Container } from '@mui/material';
import Head from 'next/head';
import { FC, ReactNode } from 'react';
import { Navbar, Sidebar } from '../ui';

interface Props {
    title?: string;
    children: ReactNode | JSX.Element | JSX.Element[];
}

export const Layout: FC<Props> = ({ title = 'ManageTasks', children }) => {
    return (
        <Box
            sx={{
                flexFlow: 1
            }}>
            <Head>
                <title>{title}</title>
            </Head>
            <Navbar />
            <Sidebar />
            <Container
                maxWidth={'xl'}
                sx={{
                    py: 2
                }}>
                {children}
            </Container>
        </Box>
    );
};

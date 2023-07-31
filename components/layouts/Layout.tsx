import { Box, Container } from '@mui/material';
import Head from 'next/head';
import { FC, ReactNode } from 'react';
import { Alert, Navbar, Sidebar } from '../ui';
import { Dialog } from '../ui/Dialog';

interface Props {
    title?: string;
    children: ReactNode | JSX.Element | JSX.Element[];
}

export const Layout: FC<Props> = ({ title = 'ManageTasks', children }) => {
    return (
        <>
            <Box
                sx={{
                    flexFlow: 1
                }}>
                <Head>
                    <title>{title}</title>
                </Head>
                <Navbar />
                <Sidebar />
                <Alert />
                <Container
                    maxWidth={'xl'}
                    sx={{
                        py: 2
                    }}>
                    {children}
                </Container>
            </Box>
            <Dialog />
        </>
    );
};

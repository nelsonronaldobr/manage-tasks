import { ThemeProvider } from '@emotion/react';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { CssBaseline } from '@mui/material';
import { darkTheme, lightTheme } from '../themes';
import { UIProvider } from '../context/ui';
import { EntriesProvider } from '../context/entries';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <UIProvider>
            <EntriesProvider>
                <ThemeProvider theme={darkTheme}>
                    <CssBaseline />
                    <Component {...pageProps} />
                </ThemeProvider>
            </EntriesProvider>
        </UIProvider>
    );
}

export default MyApp;

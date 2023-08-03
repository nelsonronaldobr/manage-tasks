import { ThemeProvider } from '@emotion/react';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { CssBaseline } from '@mui/material';
import { darkTheme, lightTheme } from '../themes';
import { UIProvider } from '../context/ui';
import { EntriesProvider } from '../context/entries';
import NextNProgress from 'nextjs-progressbar';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <NextNProgress
                color={''}
                options={{
                    showSpinner: false
                }}
                showOnShallow={false}
                height={4}
                transformCSS={(defaultCSS) => {
                    const customCSS = `
                    .bar {
                        background: rgb(48, 48, 48);
                        background: linear-gradient(178.6deg, rgb(20, 36, 50) 11.8%, rgb(124, 143, 161) 83.8%);
                    }
                    `;
                    return <style>{defaultCSS + customCSS}</style>;
                }}
            />
            <UIProvider>
                <EntriesProvider>
                    <ThemeProvider theme={darkTheme}>
                        <CssBaseline />
                        <Component {...pageProps} />
                    </ThemeProvider>
                </EntriesProvider>
            </UIProvider>
        </>
    );
}

export default MyApp;

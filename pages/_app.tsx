import React from 'react';
import {Container, Header, Footer} from '@/components';
import {AppProps} from 'next/app';
import 'tailwindcss/tailwind.css';
import {ThemeProvider} from '@mui/styles';
import cpTheme from 'src/theme/cpTheme';
import Main from '@/components/main';
import '@/styles/navbar.scss';

function MyApp({Component, pageProps}: AppProps): JSX.Element {
  return (
    <Container>
      <ThemeProvider theme={cpTheme}>
        <Header />
        <Main />
        <Component {...pageProps} />
      </ThemeProvider>
    </Container>
  );
}

export default MyApp;

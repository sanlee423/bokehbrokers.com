import React from 'react';
import {AppProps} from 'next/app';
import {ThemeProvider} from '@mui/styles';
import 'tailwindcss/tailwind.css';
import '@/styles/hamburger.scss';
import '@/styles/navbar.scss';
import '@/styles/swiper.scss';
import '@/styles/nprogress.scss';
import '@/styles/readmore.scss';
import '@/styles/algolia.scss';
import {Container} from '@/components/container';
import {campediaTheme} from '@/utils/campediaTheme';
import NProgress from 'nprogress';
import Router from 'next/router';
import {CssBaseline} from '@mui/material';

Router.events.on('routeChangeStart', url => {
  console.log(`Loading: ${url}`);
  NProgress.start();
});
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({Component, pageProps}: AppProps): JSX.Element {
  return (
    <>
      <ThemeProvider theme={campediaTheme}>
        <CssBaseline />
        <Container>
          <Component {...pageProps} />
        </Container>
      </ThemeProvider>
    </>
  );
}

export default MyApp;

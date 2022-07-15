import React from 'react';
import {AppProps} from 'next/app';
import {ThemeProvider} from '@mui/styles';
import 'tailwindcss/tailwind.css';
import '@/styles/navbar.scss';
import '@/styles/swiper.scss';
import {Container} from '@/components/container';
import {Header} from '@/components/header';
import {campediaTheme} from '@/utils/campediaTheme';
import MainNav from '@/components/dropdown/mainNav';
import {Footer} from '@/components/footer';

function MyApp({Component, pageProps}: AppProps): JSX.Element {
  return (
    <>
      <ThemeProvider theme={campediaTheme}>
        <Container>
          <Header />
          <MainNav />
          <Component {...pageProps} />
          <Footer />
        </Container>
      </ThemeProvider>
    </>
  );
}

export default MyApp;

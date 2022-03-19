import React from 'react';
import {Container, Header, Footer, Cards} from '@/components';
import {AppProps} from 'next/app';
import 'tailwindcss/tailwind.css';
import '@/styles/global.scss';

function MyApp({Component, pageProps}: AppProps): JSX.Element {
  return (
    <Container>
      <Header />
      <Component {...pageProps} />
      {/* <Footer /> */}
    </Container>
  );
}

export default MyApp;

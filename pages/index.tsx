import React from 'react';
import Main from '@components/main';
import {Container, Header, Footer, Cards} from '@components';

const Home: React.FC = () => {
  return (
    <Container>
      <Header />
      <Main />
      <Cards />
      <Footer />
    </Container>
  );
};

export default Home;

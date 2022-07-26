import React from 'react';
import PageList from '@/components/pageComponents/pageList';
import Head from 'next/head';

const Brands: React.FC = () => {
  return (
    <>
      <Head>
        <title>Bokeh Broker | Film</title>
      </Head>
      <PageList type={'film'} />
    </>
  );
};

export default Brands;

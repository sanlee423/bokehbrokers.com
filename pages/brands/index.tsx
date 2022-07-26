import React from 'react';
import PageList from '@/components/pageComponents/pageList';
import Head from 'next/head';

const Brands: React.FC = () => {
  return (
    <>
      <Head>
        <title>Bokeh Broker | Brands</title>
      </Head>
      <PageList type={'brands'} />
    </>
  );
};

export default Brands;

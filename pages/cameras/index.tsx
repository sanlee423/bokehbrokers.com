import React from 'react';
import PageList from '@/components/pageComponents/pageList';
import Head from 'next/head';

const Cameras: React.FC = () => {
  return (
    <>
      <Head>
        <title>Bokeh Broker | Cameras</title>
      </Head>
      <PageList type={'cameras'} />
    </>
  );
};

export default Cameras;

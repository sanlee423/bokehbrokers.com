import BrandedProductListPage from '@/components/pageComponents/brandedProductListPage';
import Head from 'next/head';
import {useRouter} from 'next/router';
import React from 'react';

const BrandProducts: React.FC = () => {
  const router = useRouter();
  const {brandAlt} = router.query;

  return (
    <>
      <Head>
        <title>Bokeh Broker | {brandAlt} Products</title>
      </Head>
      <BrandedProductListPage />
    </>
  );
};

export default BrandProducts;

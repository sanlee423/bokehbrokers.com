import PageTitle from '@/components/header/pageTitle';
import BrandedProductListPage from '@/components/pageComponents/brandedProductListPage';
import {useRouter} from 'next/router';
import React from 'react';

const BrandProducts: React.FC = () => {
  const router = useRouter();
  const {brandAlt} = router.query;

  return (
    <>
      <PageTitle title={brandAlt as string} />
      <BrandedProductListPage />
    </>
  );
};

export default BrandProducts;

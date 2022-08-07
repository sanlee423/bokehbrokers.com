import React from 'react';
import PageList from '@/components/pageComponents/pageList';
import PageTitle from '@/components/header/pageTitle';

const Brands: React.FC = () => {
  return (
    <>
      <PageTitle />
      <PageList type={'brands'} />
    </>
  );
};

export default Brands;

import React from 'react';
import PageList from '@/components/pageComponents/pageList';

const Brands: React.FC = () => {
  return <PageList type={'brands'} filterBy={'filmManufacturer'} />;
};

export default Brands;

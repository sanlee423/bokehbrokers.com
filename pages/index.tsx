import React, {useEffect, useState} from 'react';
import Main from '@/components/main';
import {Cards} from '@/components';
import fetcher from '@/utils/fetcher';
import useSWR from 'swr';
import {FeaturedCard} from '@/components/featuredCard/featuredCard';
import {BrandCard} from '@/components/brandCard';

const Home: React.FC = () => {
  // const [brands, setBrands] = useState<string[]>([]);
  // const {data} = useSWR(`/api/brands/`, fetcher);

  // useEffect(() => {
  //   console.log(data);
  //   setBrands(data?.brands ?? []);
  // });

  return (
    <div>
      <Main />
      <FeaturedCard />
      <BrandCard />
      <Cards />
    </div>
  );
};

export default Home;

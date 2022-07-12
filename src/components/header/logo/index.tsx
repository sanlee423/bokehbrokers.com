import React from 'react';
import {useRouter} from 'next/router';
import CampediaSVG from './CampediaSVG';

export const Logo: React.FC = () => {
  const router = useRouter();

  const handleClick = (e: React.ChangeEvent<any>) => {
    e.preventDefault();
    router.push('/');
  };

  return (
    <div className="flex w-1/2 mx-2">
      <a onClick={handleClick}>
        <CampediaSVG
          data-test="icon"
          className="text-white"
          width="58"
          height="58"
        />
      </a>
    </div>
  );
};

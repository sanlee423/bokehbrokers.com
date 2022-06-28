import React from 'react';
import CameraIcon from '../icons/CameraIcon';
import {useRouter} from 'next/router';

export const Logo: React.FC = () => {
  const router = useRouter();

  const handleClick = (e: React.ChangeEvent<any>) => {
    e.preventDefault();
    router.push('/');
  };

  return (
    <div className="flex w-1/2 mx-2">
      <a onClick={handleClick}>
        <CameraIcon
          data-test="icon"
          className="text-white"
          width="58"
          height="58"
        />
      </a>
    </div>
  );
};

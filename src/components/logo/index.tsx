import React from 'react';
import Link from 'next/link';
import CameraIcon from '../icons/CameraIcon';

export const Logo: React.FC = () => {
  return (
    <div className="flex w-1/2 mx-2">
      <Link href="/" passHref>
        <a>
          <CameraIcon
            data-test="icon"
            className="text-white"
            width="58"
            height="58"
          />
        </a>
      </Link>
    </div>
  );
};

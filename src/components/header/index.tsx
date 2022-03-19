import React, {useEffect, useState} from 'react';

import {Logo} from '@/components';
import {Hamburger} from '@/components/hamburger';
import getWindowDimensions from '@/utils/windowDimensions';
import {CircularProgress} from '@mui/material';

export const Header: React.FC = () => {
  const [windowDimensions, setWindowDimensions] = useState({
    width: 700,
    height: -1,
  });

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions()!);
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="bg-white flex flex-row justify-between items-center my-2">
      <Logo />
      {windowDimensions ? (
        windowDimensions.width < 670 && <Hamburger />
      ) : (
        <CircularProgress />
      )}
    </div>
  );
};

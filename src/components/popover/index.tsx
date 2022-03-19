import {navSkeleton} from '@/utils/navSkeleton';
import getWindowDimensions from '@/utils/windowDimensions';
import {CircularProgress} from '@mui/material';
import React, {useEffect, useState} from 'react';
import PopoverMenu from './menu';

const Popover: React.FC = () => {
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
    <div className="container mx-auto flex flex-row justify-evenly">
      {windowDimensions ? (
        windowDimensions.width > 670 ? (
          navSkeleton.map(navItem => {
            return <PopoverMenu key={Object.keys(navItem)[0]} data={navItem} />;
          })
        ) : (
          <div className="h-9"> </div>
        )
      ) : (
        <CircularProgress />
      )}
    </div>
  );
};

export default Popover;

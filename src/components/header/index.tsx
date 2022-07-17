import React, {useEffect, useState} from 'react';
import {Logo} from './logo';
import useWindowSize from '@/utils/windowDimensions';
import {Hamburger} from '../dropdown/mobile/hamburger';
import Link from 'next/link';
import {Divider, Typography} from '@mui/material';
import SearchBar from '../searchBar/searchBar';

export const Header: React.FC = () => {
  const {width, height} = useWindowSize();
  const [checked, setChecked] = useState<boolean>(false);

  // Handle Hamburger Checks
  const handleCheck = (e: any) => {
    setChecked(e.target.checked);
  };

  useEffect(() => {
    checked
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'unset');
  }, [checked]);

  const handleClick = () => {
    if (document !== null) {
      const input: HTMLInputElement = document?.getElementById(
        'menu-toggle',
      ) as HTMLInputElement;
      if (input) input.checked = false;
    }
    setChecked(false);
  };

  //Handle Dimensions -- Due to issue with mobile web
  React.useEffect(() => {
    if (document !== null) {
      const headerContainer = document.getElementById('header-container');

      if (headerContainer) {
        headerContainer.style.width = `${width}px`;
        headerContainer.style.height = `${height * 0.08}px`;
      }
    }
  }, [width, height]);

  return (
    <div
      id={'header-container'}
      className={`header-container ${checked ? 'header-container-dark' : ''}`}>
      <Logo checked={checked} />
      {!checked && (
        <div className={'searchbar-container'}>
          <SearchBar />
        </div>
      )}
      {width < 700 && <Hamburger onChecked={handleCheck} />}
      <div
        className={`hamburger-primary-menu ${
          checked ? 'hamburger-primary-menu-checked' : ''
        }`}>
        <Divider className="hamburger-divider" />
        <div className={'dropdown-container'}>
          <Link href="/brands">
            <a className="hamburger-link" onClick={handleClick}>
              <Typography>Brands</Typography>
            </a>
          </Link>
          <Divider className="hamburger-divider" />
          <Link href="/cameras">
            <a className="hamburger-link" onClick={handleClick}>
              <Typography>Cameras</Typography>
            </a>
          </Link>
          <Divider className="hamburger-divider" />
          <Link href="/lens">
            <a className="hamburger-link" onClick={handleClick}>
              <Typography>Lens</Typography>
            </a>
          </Link>
          <Divider className="hamburger-divider" />
          <Link href="/film">
            <a className="hamburger-link" onClick={handleClick}>
              <Typography>Film</Typography>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

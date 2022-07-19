import React, {useState} from 'react';
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
      const hamburgerMenu = document.getElementById('hamburger-primary-menu');

      if (headerContainer) {
        headerContainer.style.width = `${width}px`;
        headerContainer.style.height = `${height * 0.08}px`;
      }

      if (hamburgerMenu && checked) {
        hamburgerMenu.style.width = `${width}px`;
        hamburgerMenu.style.height = `${height}px`;
        hamburgerMenu.style.top = `${height * 0.08}px`;
        hamburgerMenu.style.maxHeight = `${height}px`;
        document.body.style.overflow = 'hidden';
      } else if (hamburgerMenu && !checked) {
        hamburgerMenu.style.width = `${width}px`;
        hamburgerMenu.style.maxHeight = `0px`;
        document.body.style.overflow = 'unset';
      }
    }
  }, [width, height, checked]);

  return (
    <div
      id={'header-container'}
      className={`header-container ${checked ? 'header-container-dark' : ''}`}>
      <Logo checked={checked} />
      {!checked && width < 700 && (
        <div className={'searchbar-container'}>
          <SearchBar />
        </div>
      )}
      {width < 700 && <Hamburger onChecked={handleCheck} />}
      <div
        id={'hamburger-primary-menu'}
        className={`hamburger-primary-menu ${
          checked ? 'hamburger-primary-menu-checked' : ''
        }`}>
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

import React from 'react';

import {Logo} from '@components';
import {Hamburger} from '@components/hamburger';

export const Header: React.FC = () => {
  return (
    <div className="bg-white flex flex-row justify-between items-center">
      <Logo />
      <Hamburger />
    </div>
  );
};

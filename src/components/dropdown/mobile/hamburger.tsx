import React from 'react';

interface HamburgerProps {
  onChecked: (e: any) => void;
}

export const Hamburger: React.FC<HamburgerProps> = ({onChecked}) => {
  return (
    <nav className={'hamburger-container'}>
      <input type={'checkbox'} id={'menu-toggle'} onChange={onChecked} />
      <label htmlFor={'menu-toggle'} className="hamburger">
        <span className="bun bun-top">
          <span className="bun-crust bun-crust-top"></span>
        </span>
        <span className="bun bun-bottom">
          <span className="bun-crust bun-crust-bottom"></span>
        </span>
      </label>
    </nav>
  );
};

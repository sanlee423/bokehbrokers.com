import {Dispatch, SetStateAction} from 'react';

interface DropdownItemProps {
  setActiveMenu: Dispatch<SetStateAction<string>>;
  children: React.ReactNode;
  leftIcon?: JSX.Element | string;
  rightIcon?: JSX.Element | string;
  goToMenu?: string;
}

export interface DropdownProps {
  menuObj: menuItem[];
  subMenuObj?: subMenuItem[];
}

export interface subMenuItem {
  parentTitle: string;
  menuObj: menuItem[];
}

export interface menuItem {
  title: string;
  leftIcon?: JSX.Element | string;
  rightIcon?: JSX.Element | string;
  goToMenu?: string;
}

export function DropdownItem(props: DropdownItemProps) {
  return (
    <a
      href="#"
      className="menu-item"
      onClick={() => props.goToMenu && props.setActiveMenu(props.goToMenu)}>
      <span className="icon-button">{props.leftIcon}</span>
      {props.children}
      <span className="icon-right">{props.rightIcon}</span>
    </a>
  );
}

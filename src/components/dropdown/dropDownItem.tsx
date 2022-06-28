import {Dispatch, SetStateAction} from 'react';
import Link from 'next/link';

interface DropdownItemProps {
  setActiveMenu: Dispatch<SetStateAction<string>>;
  children: React.ReactNode;
  link?: string;
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
  link: string;
  leftIcon?: JSX.Element | string;
  rightIcon?: JSX.Element | string;
  goToMenu?: string;
}

export function DropdownItem(props: DropdownItemProps) {
  return (
    <>
      {props.goToMenu === 'main' && (
        <a
          className="menu-item"
          onClick={() => props.goToMenu && props.setActiveMenu(props.goToMenu)}>
          <span className="icon-button">{props.leftIcon}</span>
          {props.children}
          <span className="icon-right">{props.rightIcon}</span>
        </a>
      )}
      {props.rightIcon && (
        <a
          className="menu-item"
          onClick={() => props.goToMenu && props.setActiveMenu(props.goToMenu)}>
          <span className="icon-button">{props.leftIcon}</span>
          {props.children}
          <span className="icon-right">{props.rightIcon}</span>
        </a>
      )}
      {props.link && props.rightIcon === undefined && (
        <Link href={props.link} passHref>
          <a
            className="menu-item"
            onClick={() =>
              props.goToMenu && props.setActiveMenu(props.goToMenu)
            }>
            <span className="icon-button">{props.leftIcon}</span>
            {props.children}
          </a>
        </Link>
      )}
    </>
  );
}

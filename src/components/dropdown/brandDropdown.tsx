import {Dispatch, SetStateAction, useEffect, useRef, useState} from 'react';
import {CSSTransition} from 'react-transition-group';
import SettingsIcon from '@mui/icons-material/Settings';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import BoltIcon from '@mui/icons-material/Bolt';

export function BrandDropDown() {
  const [activeMenu, setActiveMenu] = useState('main');
  const [menuHeight, setMenuHeight] = useState<number | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (dropdownRef.current !== null) {
      const offsetHeight =
        (dropdownRef.current.firstChild as HTMLElement).offsetHeight ?? 0;

      setMenuHeight(offsetHeight + 100);
    }
  }, [setMenuHeight]);

  function calcHeight(el: HTMLElement) {
    const height = el.offsetHeight + 100;
    setMenuHeight(height);
  }

  return (
    <>
      <CSSTransition
        in={activeMenu === 'main'}
        timeout={500}
        classNames="menu-primary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem setActiveMenu={setActiveMenu}>My Profile</DropdownItem>
          <DropdownItem
            setActiveMenu={setActiveMenu}
            leftIcon={<SettingsIcon />}
            rightIcon={<KeyboardArrowRightIcon />}
            goToMenu="settings">
            Settings
          </DropdownItem>
          <DropdownItem
            setActiveMenu={setActiveMenu}
            leftIcon="🦧"
            rightIcon={<KeyboardArrowRightIcon />}
            goToMenu="animals">
            Animals
          </DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'settings'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem
            setActiveMenu={setActiveMenu}
            goToMenu="main"
            leftIcon={<KeyboardArrowLeftIcon />}>
            <h2>My Tutorial</h2>
          </DropdownItem>
          <DropdownItem setActiveMenu={setActiveMenu} leftIcon={<BoltIcon />}>
            HTML
          </DropdownItem>
          <DropdownItem setActiveMenu={setActiveMenu} leftIcon={<BoltIcon />}>
            CSS
          </DropdownItem>
          <DropdownItem setActiveMenu={setActiveMenu} leftIcon={<BoltIcon />}>
            JavaScript
          </DropdownItem>
          <DropdownItem setActiveMenu={setActiveMenu} leftIcon={<BoltIcon />}>
            Awesome!
          </DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'animals'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem
            setActiveMenu={setActiveMenu}
            goToMenu="main"
            leftIcon={<KeyboardArrowLeftIcon />}>
            <h2>Animals</h2>
          </DropdownItem>
          <DropdownItem setActiveMenu={setActiveMenu} leftIcon="🦘">
            Kangaroo
          </DropdownItem>
          <DropdownItem setActiveMenu={setActiveMenu} leftIcon="🐸">
            Frog
          </DropdownItem>
          <DropdownItem setActiveMenu={setActiveMenu} leftIcon="🦋">
            Horse?
          </DropdownItem>
          <DropdownItem setActiveMenu={setActiveMenu} leftIcon="🦔">
            Hedgehog
          </DropdownItem>
        </div>
      </CSSTransition>
    </>
  );
}

interface DropdownItemProps {
  setActiveMenu: Dispatch<SetStateAction<string>>;
  children: React.ReactNode;
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

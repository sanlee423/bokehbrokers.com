import {useEffect, useRef, useState} from 'react';
import {CSSTransition} from 'react-transition-group';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import {DropdownItem, DropdownProps} from './dropDownItem';

export function DropdownMenu({
  dropdown,
  isLeft = true,
}: {
  dropdown: DropdownProps;
  isLeft: boolean;
}) {
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
    <div
      className={`dropdown dropdown-${isLeft ? 'left' : 'right'}`}
      style={{height: menuHeight ?? 0}}
      ref={dropdownRef}>
      <CSSTransition
        in={activeMenu === 'main'}
        timeout={500}
        classNames="menu-primary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          {dropdown.menuObj.map(items => {
            return (
              <DropdownItem
                key={items.title}
                setActiveMenu={setActiveMenu}
                leftIcon={items.leftIcon}
                rightIcon={items.rightIcon}
                goToMenu={items.goToMenu}>
                {items.title}
              </DropdownItem>
            );
          })}
        </div>
      </CSSTransition>

      {dropdown.subMenuObj &&
        dropdown.subMenuObj.map(items => {
          return (
            <CSSTransition
              key={items.parentTitle}
              in={activeMenu === items.parentTitle}
              timeout={500}
              classNames="menu-secondary"
              unmountOnExit
              onEnter={calcHeight}>
              <div className="menu">
                <DropdownItem
                  setActiveMenu={setActiveMenu}
                  goToMenu="main"
                  leftIcon={<KeyboardArrowLeftIcon />}>
                  <h2>Go Back</h2>
                </DropdownItem>
                {items.menuObj.map(subItem => {
                  return (
                    <DropdownItem
                      key={subItem.title}
                      setActiveMenu={setActiveMenu}
                      leftIcon={subItem.leftIcon}>
                      {subItem.title}
                    </DropdownItem>
                  );
                })}
              </div>
            </CSSTransition>
          );
        })}
    </div>
  );
}

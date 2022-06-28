import React from 'react';
import Drawer from '@mui/material/Drawer';
import {styled} from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import {Collapsible} from './collapsible';
import {brandDropdown} from '../dropdown/types/brandDropdown';
import {cameraDropdown} from '../dropdown/types/cameraDropdown';
import {lensDropDown} from '../dropdown/types/lensDropdown';
import {filmDropDown} from '../dropdown/types/filmDropdown';
import {CSSTransition} from 'react-transition-group';

const duration = 500;

const DrawerHeader = styled('div')(({theme}) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-start',
}));

export const Hamburger: React.FC = ({}) => {
  const [open, setOpen] = React.useState<boolean>(false);
  const [showHamburger, setShowHamburger] = React.useState<boolean>(true);
  const [width, setWidth] = React.useState<number | null>(null);

  const hamburgerClose = () => {
    setShowHamburger(false);
  };

  const hamburgerOpen = () => {
    setShowHamburger(true);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  function calcWidth(el: HTMLElement) {
    const width = 240;
    setWidth(width);
  }

  return (
    <>
      <div className="flex w-full justify-end mx-5">
        {showHamburger && (
          <IconButton
            color="inherit"
            aria-label="open hamburger"
            edge="end"
            onClick={handleDrawerOpen}
            sx={{...(open && {display: 'none'})}}>
            <MenuIcon />
          </IconButton>
        )}
      </div>
      <CSSTransition
        in={open}
        timeout={duration}
        classNames=""
        unmountOnExit
        onExit={() => {
          setTimeout(() => hamburgerOpen(), duration + 10);
        }}
        onEnter={(el: HTMLElement) => {
          hamburgerClose();
          calcWidth(el);
        }}>
        <Drawer
          sx={{
            width: width ?? 0,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: width ?? 0,
            },
          }}
          variant="persistent"
          anchor="right"
          open={open}>
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              <CloseIcon />
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List>
            <Collapsible dropDownItems={brandDropdown} title={'Brands'} />
            <Collapsible dropDownItems={cameraDropdown} title={'Cameras'} />
            <Collapsible dropDownItems={lensDropDown} title={'Lens'} />
            <Collapsible dropDownItems={filmDropDown} title={'Film'} />
          </List>
        </Drawer>
      </CSSTransition>
    </>
  );
};
